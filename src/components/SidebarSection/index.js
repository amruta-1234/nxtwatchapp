import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddLine} from 'react-icons/ri'
import ThemeContext from '../../context/ThemeContext'

import {
  SidebarCard,
  ListCard,
  ListItemCard,
  ContactCard,
  ContactHeading,
  ContactLogoCard,
  ContactLogo,
  ContactText,
  LinkItemText,
} from './styledComponents'

const SidebarSection = () => (
  <ThemeContext.Consumer>
    {value => {
      const {showLightTheme} = value
      return (
        <sidebar>
          <SidebarCard lightTheme={showLightTheme}>
            <ListCard>
              <Link to="/">
                <ListItemCard lightTheme={showLightTheme}>
                  <AiFillHome />
                  <LinkItemText>Home</LinkItemText>
                </ListItemCard>
              </Link>
              <Link to="/trending">
                <ListItemCard lightTheme={showLightTheme}>
                  <HiFire />
                  <LinkItemText>Trending</LinkItemText>
                </ListItemCard>
              </Link>
              <Link to="/gaming">
                <ListItemCard lightTheme={showLightTheme}>
                  <SiYoutubegaming />
                  <LinkItemText>Gaming</LinkItemText>
                </ListItemCard>
              </Link>
              <Link to="/saved-videos">
                <ListItemCard lightTheme={showLightTheme}>
                  <RiMenuAddLine />
                  <LinkItemText>Saved videos</LinkItemText>
                </ListItemCard>
              </Link>
            </ListCard>
            <ContactCard>
              <ContactHeading lightTheme={showLightTheme}>
                CONTACT US
              </ContactHeading>
              <ContactLogoCard>
                <ContactLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <ContactLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <ContactLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </ContactLogoCard>
              <ContactText lightTheme={showLightTheme}>
                Enjoy! Now to see your channels and recommendations!
              </ContactText>
            </ContactCard>
          </SidebarCard>
        </sidebar>
      )
    }}
  </ThemeContext.Consumer>
)

export default SidebarSection
