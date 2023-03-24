import {Link} from 'react-router-dom'
import {GameListEl, GamingVideoImg, GamingVideoTitle} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const GamingVideoItem = props => {
  const {details} = props
  const {id, title, thumbnailUrl, viewCount} = details

  return (
    <ThemeContext.Consumer>
      {value => {
        const {showLightTheme} = value
        return (
          <Link to={`/videos/${id}`} className="link-item">
            <GameListEl lightTheme={showLightTheme}>
              <GamingVideoImg src={thumbnailUrl} alt="video thumbnail" />
              <GamingVideoTitle lightTheme={showLightTheme}>
                {title}
              </GamingVideoTitle>
              <p>{viewCount} Watching Worldwide</p>
            </GameListEl>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GamingVideoItem
