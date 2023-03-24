import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../context/ThemeContext'

import {
  ListItemCard,
  ThumbnailImg,
  DetailCard,
  Title,
  ViewsCountCard,
} from './styledComponents'

const SavedVideoItem = props => {
  const {details} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = details

  const time = formatDistanceToNow(new Date(publishedAt))

  return (
    <ThemeContext.Consumer>
      {value => {
        const {showLightTheme} = value
        return (
          <Link to={`/videos/${id}`} className="link-item">
            <ListItemCard lightTheme={showLightTheme}>
              <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <DetailCard>
                <Title lightTheme={showLightTheme}>{title}</Title>
                <p>{channel.name}</p>
                <ViewsCountCard>
                  <p>{viewCount} views</p>
                  <p>{time} ago</p>
                </ViewsCountCard>
              </DetailCard>
            </ListItemCard>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SavedVideoItem
