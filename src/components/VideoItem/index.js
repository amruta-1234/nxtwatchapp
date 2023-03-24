import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../context/ThemeContext'

import {
  ListItemCard,
  ThumbnailImg,
  VideoDetailCard,
  ProfileImg,
  DetailCard,
  Title,
  ViewsCountCard,
} from './styledComponents'

import './index.css'

const VideoItem = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    channel,
    viewCount,
    publishedAt,
  } = videoDetails

  const time = formatDistanceToNow(new Date(publishedAt))

  return (
    <ThemeContext.Consumer>
      {value => {
        const {showLightTheme} = value
        return (
          <Link to={`/videos/${id}`} className="link-item">
            <ListItemCard lightTheme={showLightTheme}>
              <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetailCard>
                <ProfileImg src={channel.profileImageUrl} alt="channel logo" />
                <DetailCard>
                  <Title lightTheme={showLightTheme}>{title}</Title>
                  <p>{channel.name}</p>
                  <ViewsCountCard>
                    <p>{viewCount} views</p>
                    <p>. {time} ago</p>
                  </ViewsCountCard>
                </DetailCard>
              </VideoDetailCard>
            </ListItemCard>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoItem
