import styled from 'styled-components'

export const SidebarNotFoundContainer = styled.div`
  display: flex;
`
export const NotFoundCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  color: ${props => (props.isLight ? '#1e293b' : '#ebebeb')};
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  background-color: ${props => (props.isLight ? '#f9f9f9' : '#181818')};
`
export const NotFoundImg = styled.img`
  width: 250px;
  margin: 10px;
`
