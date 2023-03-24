import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import SidebarSection from '../SidebarSection'
import SavedVideoItem from '../SavedVideoItem'
import ThemeContext from '../../context/ThemeContext'
import {
  SidebarTrendingVideosContainer,
  TrendingVideoContainer,
  TrendingVideoListCard,
  FailureCard,
  FailureImg,
  RetryBtn,
  BannerCard,
  IconCard,
  BannerHeading,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {trendingVideosList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'

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
        trendingVideosList: updatedData,
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
    this.getTrendingVideos()
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
    const {trendingVideosList} = this.state

    return (
      <>
        <TrendingVideoListCard>
          {trendingVideosList.map(video => (
            <SavedVideoItem key={video.id} details={video} />
          ))}
        </TrendingVideoListCard>
      </>
    )
  }

  renderTrendingView = () => {
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

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {showLightTheme} = value
          return (
            <>
              <Header />
              <SidebarTrendingVideosContainer>
                <SidebarSection />
                <TrendingVideoContainer
                  data-testid="trending"
                  lightTheme={showLightTheme}
                >
                  <BannerCard lightTheme={showLightTheme}>
                    <IconCard lightTheme={showLightTheme}>
                      <HiFire />
                    </IconCard>
                    <BannerHeading lightTheme={showLightTheme}>
                      Trending
                    </BannerHeading>
                  </BannerCard>
                  {this.renderTrendingView()}
                </TrendingVideoContainer>
              </SidebarTrendingVideosContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
