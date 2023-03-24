import styled from 'styled-components'

export const SidebarCard = styled.div`
  width: 250px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => (props.lightTheme ? '#ffffff' : '#212121')};
  color: ${props => (props.lightTheme ? '#212121' : '#ffffff')};
  @media (max-width: 767px) {
    justify-content: flex-start;
    height: auto;
    width: 100%;
  }
`
export const ListCard = styled.ul`
  list-style-type: none;
  margin: 0;
`
export const ListItemCard = styled.li`
  margin: 0;
  font-family: Roboto;
  font-size: 15px;
  color: ${props => (props.lightTheme ? '#212121' : '#ffffff')};
  display: flex;
  align-items: center;
  background-color: ${props => (props.lightTheme ? '#f1f5f9' : '#212121')};
  text-decoration: none;
  margin-bottom: 10px;
`
export const LinkItemText = styled.p`
  margin: 10px;
`
export const ContactCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ContactHeading = styled.p`
  font-family: Roboto;
  font-size: 18px;
  color: ${props => (props.lightTheme ? '#212121' : '#ffffff')};
`

export const ContactLogoCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90%;
`

export const ContactLogo = styled.img`
  width: 40px;
  margin: 5px;
`
export const ContactText = styled.p`
  font-family: Roboto;
  font-size: 16px;
  color: ${props => (props.lightTheme ? '#212121' : '#ffffff')};
  font-weight: 600;
`
