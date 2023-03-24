import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header'
import SidebarSection from '../SidebarSection'
import GamingVideoItem from '../GamingVideoItem'
import ThemeContext from '../../context/ThemeContext'

import {
  SidebarGamingVideosContainer,
  GamingVideoContainer,
  GamingVideoListCard,
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

class Gaming extends Component {
  state = {gamingVideosList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'

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
        viewCount: each.view_count,
      }))

      this.setState({
        gamingVideosList: updatedData,
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
    this.getGamingVideos()
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
    const {gamingVideosList} = this.state

    return (
      <>
        <GamingVideoListCard>
          {gamingVideosList.map(video => (
            <GamingVideoItem key={video.id} details={video} />
          ))}
        </GamingVideoListCard>
      </>
    )
  }

  renderGamingView = () => {
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
              <SidebarGamingVideosContainer>
                <SidebarSection />
                <GamingVideoContainer
                  data-testid="gaming"
                  lightTheme={showLightTheme}
                >
                  <BannerCard lightTheme={showLightTheme}>
                    <IconCard lightTheme={showLightTheme}>
                      <SiYoutubegaming />
                    </IconCard>
                    <BannerHeading lightTheme={showLightTheme}>
                      Gaming
                    </BannerHeading>
                  </BannerCard>
                  {this.renderGamingView()}
                </GamingVideoContainer>
              </SidebarGamingVideosContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
