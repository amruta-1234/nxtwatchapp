import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SidebarSection from '../SidebarSection'
import {
  SidebarNotFoundContainer,
  NotFoundCard,
  NotFoundImg,
} from './styledComponents'

const NotFound = () => {
  const renderNotFound = () => (
    <ThemeContext.Consumer>
      {value => {
        const {showLightTheme} = value

        const lightThemeImgUrl = showLightTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        return (
          <NotFoundCard isLight={showLightTheme}>
            <NotFoundImg src={lightThemeImgUrl} alt="not found" />
            <h1>Page Not Found</h1>
            <p>we are sorry, the page you requested could not be found.</p>
          </NotFoundCard>
        )
      }}
    </ThemeContext.Consumer>
  )

  return (
    <>
      <Header />
      <SidebarNotFoundContainer>
        <SidebarSection />
        {renderNotFound()}
      </SidebarNotFoundContainer>
    </>
  )
}

export default NotFound
