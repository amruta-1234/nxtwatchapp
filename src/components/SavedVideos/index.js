// import {formatDistanceToNow} from 'date-fns'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import SidebarSection from '../SidebarSection'
import ThemeContext from '../../context/ThemeContext'
import SavedVideoItem from '../SavedVideoItem'

import {
  SidebarSavedVideosContainer,
  EmptyCard,
  EmptyListImg,
  SavedVideoListCard,
  SavedVideoContainer,
  BannerCard,
  IconCard,
  BannerHeading,
} from './styledComponents'

const SavedVideos = () => {
  const renderSavedVideoList = () => (
    <ThemeContext.Consumer>
      {value => {
        const {savedVideoList, showLightTheme} = value

        return savedVideoList.length === 0 ? (
          <EmptyCard lightTheme={showLightTheme}>
            <EmptyListImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <h1>No saved videos found</h1>
            <p>You can save your videos while watching them</p>
          </EmptyCard>
        ) : (
          <SavedVideoListCard>
            {savedVideoList.map(video => (
              <SavedVideoItem key={video.id} details={video} />
            ))}
          </SavedVideoListCard>
        )
      }}
    </ThemeContext.Consumer>
  )

  return (
    <ThemeContext.Consumer>
      {value => {
        const {showLightTheme} = value
        return (
          <>
            <Header />
            <SidebarSavedVideosContainer>
              <SidebarSection />
              <SavedVideoContainer
                data-testid="savedVideos"
                lightTheme={showLightTheme}
              >
                <BannerCard lightTheme={showLightTheme}>
                  <IconCard lightTheme={showLightTheme}>
                    <HiFire />
                  </IconCard>
                  <BannerHeading lightTheme={showLightTheme}>
                    Saved Videos
                  </BannerHeading>
                </BannerCard>
                {renderSavedVideoList()}
              </SavedVideoContainer>
            </SidebarSavedVideosContainer>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}

/* return <ThemeContext.Consume>
    {value => {
      const {savedVideoList} = value

      return savedVideoList.length === 0 ? (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <h1>No saved videos found</h1>
          <p>You can save your videos while watching them</p>
        </div>
      ) : (
        <div>
          <ul>
            {savedVideoList.map(video => {
              const {
                title,
                thumbnailUrl,
                channel,
                viewCount,
                publishedAt,
              } = video
              const time = formatDistanceToNow(new Date(publishedAt))
              return (
                <li>
                  <img src={thumbnailUrl} alt="thumbnail" />
                  <div>
                    <h1>{title}</h1>
                    <p>{channel.name}</p>
                    <div>
                      <p>{viewCount} views</p>
                      <p>{time} ago</p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      )
    }}
  </ThemeContext.Consume>
) */

export default SavedVideos
