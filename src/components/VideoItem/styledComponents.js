import styled from 'styled-components'

export const ListItemCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #475569;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500px;
  width: 300px;
  margin: 10px;
  text-decoration: none;
`
export const ThumbnailImg = styled.img`
  width: 300px;
`

export const VideoDetailCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`

export const ProfileImg = styled.img`
  width: 40px;
  margin: 5px;
`

export const DetailCard = styled.div`
  padding: 5px;
`

export const Title = styled.p`
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  color: ${props => (props.lightTheme ? '#1e293b' : '#ffffff')};
`

export const ViewsCountCard = styled.div`
  display: flex;
  align-items: center;
`
