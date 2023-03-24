import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {RiMenuAddLine} from 'react-icons/ri'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SidebarSection from '../SidebarSection'
import {
  SidebarVideoDetailsContainer,
  FailureCard,
  FailureImg,
  RetryBtn,
  VideoContainer,
  Title,
  ViewsBtnCard,
  ViewsTimeCard,
  BtnCards,
  LikeBtn,
  DislikeBtn,
  SaveBtn,
  ProfileImg,
  ProfileDetailCard,
  ChannelName,
  ReactPlayerEl,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    videoDetailsObj: {},
    apiStatus: apiStatusConstants.initial,
    isLike: false,
    isDislike: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()
      const updatedData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
      }

      this.setState({
        videoDetailsObj: updatedData,
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
    this.getVideoDetails()
  }

  renderFailureView = () => (
    <FailureCard>
      <FailureImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>
        We are having some trouble to complete your request. Please try again
        later.
      </p>
      <RetryBtn onClick={this.onClickFailureRetry} type="button">
        Retry
      </RetryBtn>
    </FailureCard>
  )

  onClickLike = () => {
    const {isDislike} = this.state
    if (isDislike) {
      this.setState(prevState => ({
        isLike: !prevState.isLike,
        isDislike: false,
      }))
    } else {
      this.setState(prevState => ({isLike: !prevState.isLike}))
    }
  }

  onClickDislike = () => {
    const {isLike} = this.state
    if (isLike) {
      this.setState(prevState => ({
        isDislike: !prevState.isDislike,
        isLike: false,
      }))
    } else {
      this.setState(prevState => ({isDislike: !prevState.isDislike}))
    }
  }

  renderSuccessView = () => {
    const {videoDetailsObj, isLike, isDislike, isSaved} = this.state
    const {
      id,
      title,
      videoUrl,
      channel,
      viewCount,
      publishedAt,
      description,
    } = videoDetailsObj

    const time = formatDistanceToNow(new Date(publishedAt))

    const saveText = isSaved ? 'Saved' : 'Save'

    return (
      <ThemeContext.Consumer>
        {value => {
          const {showLightTheme, onSavedVideo, onUnsavedVideo} = value

          const onClickSaveBtn = () => {
            if (isSaved === false) {
              this.setState(prevState => ({
                isSaved: !prevState.isSaved,
              }))
              onSavedVideo(videoDetailsObj)
            } else {
              this.setState(prevState => ({
                isSaved: !prevState.isSaved,
              }))
              onUnsavedVideo(id)
            }
          }
          return (
            <VideoContainer
              data-testid="videoItemDetails"
              lightTheme={showLightTheme}
            >
              <ReactPlayerEl>
                <ReactPlayer
                  url={videoUrl}
                  controls
                  width="100%"
                  height="100%"
                />
              </ReactPlayerEl>

              <Title lightTheme={showLightTheme}>{title}</Title>
              <ViewsBtnCard>
                <ViewsTimeCard>
                  <p>{viewCount} views </p>
                  <p>{time} ago</p>
                </ViewsTimeCard>
                <BtnCards>
                  <LikeBtn
                    type="button"
                    onClick={this.onClickLike}
                    isActive={isLike}
                  >
                    <BiLike />
                    Like
                  </LikeBtn>
                  <DislikeBtn
                    type="button"
                    onClick={this.onClickDislike}
                    isActive={isDislike}
                  >
                    <BiDislike /> Dislike
                  </DislikeBtn>
                  <SaveBtn
                    type="button"
                    onClick={(this.onSavedVideo, onClickSaveBtn)}
                    isActive={isSaved}
                  >
                    <RiMenuAddLine /> {saveText}
                  </SaveBtn>
                </BtnCards>
              </ViewsBtnCard>
              <hr />
              <ProfileDetailCard>
                <ProfileImg src={channel.profileImageUrl} alt="channel logo" />
                <div>
                  <ChannelName lightTheme={showLightTheme}>
                    {channel.name}
                  </ChannelName>
                  <p>{channel.subscriberCount} subscribers</p>
                  <p>{description}</p>
                </div>
              </ProfileDetailCard>
            </VideoContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderVideoDetailsView = () => {
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
      <>
        <Header />
        <SidebarVideoDetailsContainer>
          <SidebarSection />
          {this.renderVideoDetailsView()}
        </SidebarVideoDetailsContainer>
      </>
    )
  }
}
export default VideoItemDetails
