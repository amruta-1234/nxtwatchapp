import styled from 'styled-components'

export const GameListEl = styled.li`
  padding: 10px;
  font-family: Roboto;
  font-size: 18px;
  color: #475569;
  margin: 20px;
  cursor: pointer;
`

export const GamingVideoImg = styled.img`
  width: 250px;
`

export const GamingVideoTitle = styled.p`
  font-family: Roboto;
  font-size: 18px;
  color: ${props => (props.lightTheme ? '#1e293b' : '#ffffff')};
  font-weight: 500;
`
