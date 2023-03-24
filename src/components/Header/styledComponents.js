import styled from 'styled-components'

export const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding: 10px;
  background-color: ${props => (props.lightTheme ? '#ffffff' : '#212121')};
  color: ${props => (props.lightTheme ? '#212121' : '#ffffff')};
`
export const NavSubCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  width: 100%;
`

export const Logo = styled.img`
  width: 100px;
`

export const BtnCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ThemeBtn = styled.button`
  background-color: transparent;
  border-width: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  font-size: 25px;
  color: ${props => (props.lightTheme ? '#0f0f0f' : '#ffffff')};
`
export const ProfileIcon = styled.div`
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const ProfileImg = styled.img`
  width: 30px;
  margin-right: 10px;
  @media (max-width: 767px) {
    display: none;
  }
`

export const LogoutBtn = styled.button`
  border: ${props =>
    props.lightTheme ? '1px solid #3b82f6' : '1px solid #ffffff'};
  color: ${props => (props.lightTheme ? '#3b82f6' : '#ffffff')};
  background-color: transparent;
  border-radius: 5px;
  padding: 5px;
  width: 100px;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  margin: 10px;
  cursor: pointer;
  margin-right: 10px;
  margin-left: 10px;
  @media (max-width: 767px) {
    display: none;
  }
`
export const LogoutBtnIcon = styled.button`
  border-width: 0px;
  background-color: transparent;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
  margin-right: 10px;
  margin-left: 10px;
  font-size: 30px;
  color: ${props => (props.lightTheme ? '#0f0f0f' : '#ffffff')};
  @media (min-width: 768px) {
    display: none;
  }
`
export const PopupCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.lightTheme ? '#ffffff' : '#212121')};
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  color: ${props => (props.lightTheme ? '#00306e' : '#ffffff')};
  padding: 10px;
  width: 300px;
  height: 160px;
  border-radius: 5px;
`

export const PopupBtnCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ConfirmBtn = styled.button`
  border-width: 0px;
  color: #ffffff;
  background-color: #3b82f6;
  border-radius: 5px;
  padding: 5px;
  width: 100px;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  margin: 10px;
  cursor: pointer;
  margin-right: 10px;
  margin-left: 10px;
`
export const CancelBtn = styled.button`
  border: 1px solid #7e858e;
  color: #7e858e;
  background-color: transparent;
  border-radius: 5px;
  padding: 5px;
  width: 100px;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  margin: 10px;
  cursor: pointer;
  margin-right: 10px;
  margin-left: 10px;
`
