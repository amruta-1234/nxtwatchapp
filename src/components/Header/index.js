import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import {FaMoon} from 'react-icons/fa'
import {BiMenu} from 'react-icons/bi'
import {FiLogOut, FiSun} from 'react-icons/fi'

import ThemeContext from '../../context/ThemeContext'
import {
  NavContainer,
  NavSubCard,
  Logo,
  BtnCard,
  ThemeBtn,
  ProfileImg,
  LogoutBtn,
  ProfileIcon,
  LogoutBtnIcon,
  PopupCard,
  PopupBtnCard,
  ConfirmBtn,
  CancelBtn,
} from './styledComponents'

const Header = props => {
  const {history} = props

  const onLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {showLightTheme, changeTheme} = value
        const onChangeTheme = () => {
          changeTheme()
        }

        const themeIcon = showLightTheme ? <FaMoon /> : <FiSun />
        const logoUrl = showLightTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        return (
          <NavContainer lightTheme={showLightTheme}>
            <NavSubCard>
              <Link to="/">
                <Logo src={logoUrl} alt="website logo" />
              </Link>

              <BtnCard>
                <ThemeBtn
                  onClick={onChangeTheme}
                  data-testid="theme"
                  type="button"
                  lightTheme={showLightTheme}
                >
                  {themeIcon}
                </ThemeBtn>
                <ProfileImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <ProfileIcon>
                  <BiMenu />
                </ProfileIcon>
                <Popup
                  modal
                  trigger={
                    <LogoutBtn type="button" lightTheme={showLightTheme}>
                      Logout
                    </LogoutBtn>
                  }
                >
                  {close => (
                    <PopupCard lightTheme={showLightTheme}>
                      <p>Are you sure, you want to logout</p>
                      <PopupBtnCard>
                        <CancelBtn
                          onClick={() => close()}
                          type="button"
                          lightTheme={showLightTheme}
                        >
                          Cancel
                        </CancelBtn>
                        <ConfirmBtn onClick={onLogout} type="button">
                          Confirm
                        </ConfirmBtn>
                      </PopupBtnCard>
                    </PopupCard>
                  )}
                </Popup>

                <Popup
                  modal
                  trigger={
                    <LogoutBtnIcon
                      onClick={onLogout}
                      type="button"
                      lightTheme={showLightTheme}
                    >
                      <FiLogOut />
                    </LogoutBtnIcon>
                  }
                >
                  {close => (
                    <PopupCard lightTheme={showLightTheme}>
                      <p>Are you sure, you want to logout</p>
                      <PopupBtnCard>
                        <CancelBtn
                          onClick={() => close()}
                          type="button"
                          lightTheme={showLightTheme}
                        >
                          Cancel
                        </CancelBtn>
                        <ConfirmBtn onClick={onLogout} type="button">
                          Confirm
                        </ConfirmBtn>
                      </PopupBtnCard>
                    </PopupCard>
                  )}
                </Popup>
              </BtnCard>
            </NavSubCard>
          </NavContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
