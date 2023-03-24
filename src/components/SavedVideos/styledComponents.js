import styled from 'styled-components'

export const SidebarSavedVideosContainer = styled.div`
  display: flex;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`
export const EmptyCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  height: 100%;
  color: ${props => (props.lightTheme ? '#1e293b' : '#ffffff')};
  background-color: ${props => (props.lightTheme ? '#f9f9f9 ' : '#181818')};
`
export const EmptyListImg = styled.img`
  width: 250px;
  margin: 10px;
`
export const SavedVideoListCard = styled.ul`
  list-style-type: none;
  width: 100%;
  padding: 10px;
`
export const SavedVideoContainer = styled.div`
  width: 100%;
  background-color: ${props => (props.lightTheme ? '#f9f9f9 ' : '#0f0f0f')};
`

export const BannerCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 40px;
  background-color: ${props => (props.lightTheme ? '#f1f1f1 ' : '#181818')};
`

export const IconCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background-color: ${props => (props.lightTheme ? '#cbd5e1 ' : '#0f0f0f')};
  color: #ff0000;
  width: 60px;
  height: 60px;
  font-size: 30px;
  border-radius: 30px;
  margin: 20px;
`
export const BannerHeading = styled.h1`
  font-family: Roboto;
  color: ${props => (props.lightTheme ? '#1e293b' : '#ffffff')};
  font-size: 28px;
  font-weight: 600;
`
