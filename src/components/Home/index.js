import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {GrFormClose, GrFormSearch} from 'react-icons/gr'
import Header from '../Header'
import SidebarSection from '../SidebarSection'
import VideoItem from '../VideoItem'
import ThemeContext from '../../context/ThemeContext'

import {
  SidebarHomeContainer,
  BannerSection,
  CloseBtn,
  Logo,
  GetItNowBtn,
  HomeContainer,
  SearchInputCard,
  SearchInput,
  SearchBtn,
  VideoListCard,
  FailureCard,
  FailureImg,
  RetryBtn,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    videoList: [],
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
    bannerShow: true,
  }

  componentDidMount() {
    this.getVideosList()
  }

  getVideosList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state

    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        viewCount: each.view_count,
        publishedAt: each.published_at,
      }))

      this.setState({
        videoList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  onClickFailureRetry = () => {
    this.getVideosList()
  }

  renderFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {showLightTheme} = value
        return (
          <FailureCard lightTheme={showLightTheme}>
            <FailureImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
              alt="failure view"
            />
            <h1>Oops! Something Went Wrong</h1>
            <p>
              We are having some trouble to complete your request. Please try
              again later.
            </p>
            <RetryBtn onClick={this.onClickFailureRetry} type="button">
              Retry
            </RetryBtn>
          </FailureCard>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderSuccessView = () => {
    const {videoList} = this.state
    if (videoList.length === 0) {
      return this.renderNoResultView()
    }
    return (
      <>
        <VideoListCard>
          {videoList.map(video => (
            <VideoItem key={video.id} videoDetails={video} />
          ))}
        </VideoListCard>
      </>
    )
  }

  onClickNoResultRetry = () => {
    this.setState({searchInput: ''}, this.getVideosList)
  }

  renderNoResultView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {showLightTheme} = value
        return (
          <FailureCard lightTheme={showLightTheme}>
            <FailureImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <h1>No Search results found</h1>
            <p>Try different key words or remove search filter</p>
            <RetryBtn onClick={this.onClickNoResultRetry} type="button">
              Retry
            </RetryBtn>
          </FailureCard>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderHomeView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearch = () => {
    this.getVideosList()
  }

  onClickClose = () => {
    this.setState({bannerShow: false})
  }

  renderBannerSection = () => (
    <BannerSection data-testid="banner">
      <CloseBtn type="button" data-testid="close" onClick={this.onClickClose}>
        <GrFormClose />
      </CloseBtn>
      <Logo
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="nxt watch logo"
      />
      <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
      <GetItNowBtn type="button">GET IT NOW</GetItNowBtn>
    </BannerSection>
  )

  render() {
    const {searchInput, bannerShow} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {showLightTheme} = value
          return (
            <>
              <Header />
              <SidebarHomeContainer>
                <SidebarSection />
                <HomeContainer data-testid="home" lightTheme={showLightTheme}>
                  {bannerShow && this.renderBannerSection()}
                  <SearchInputCard>
                    <SearchInput
                      onChange={this.onChangeSearchInput}
                      type="search"
                      placeholder="Search"
                      value={searchInput}
                    />
                    <SearchBtn
                      onClick={this.onClickSearch}
                      type="button"
                      lightTheme={showLightTheme}
                      data-testid="searchButton"
                    >
                      <GrFormSearch />
                    </SearchBtn>
                  </SearchInputCard>
                  {this.renderHomeView()}
                </HomeContainer>
              </SidebarHomeContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
