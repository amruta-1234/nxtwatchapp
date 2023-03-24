import styled from 'styled-components'

export const ListItemCard = styled.li`
  display: flex;
  color: #475569;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500px;
  width: 100%;
  margin: 20px;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`
export const ThumbnailImg = styled.img`
  width: 320px;
`

export const DetailCard = styled.div`
  padding: 10px;
  width: 100%;
`

export const Title = styled.p`
  font-family: Roboto;
  font-size: 20px;
  font-weight: 500;
  color: ${props => (props.lightTheme ? '#1e293b' : '#ffffff')};
`

export const ViewsCountCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
`
