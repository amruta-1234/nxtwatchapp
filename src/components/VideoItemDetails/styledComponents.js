import styled from 'styled-components'

export const SidebarVideoDetailsContainer = styled.div`
  display: flex;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`
export const FailureCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  color: #1e293b;
  font-size: 16px;
  font-weight: 500;
`
export const FailureImg = styled.img`
  width: 250px;
  margin: 10px;
`
export const RetryBtn = styled.button`
  background-color: #4f46e5;
  color: #f8fafc;
  border-width: 0px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
  padding: 5px;
  cursor: pointer;
`
export const VideoContainer = styled.div`
  width: 100%;
  margin-bottom: 40px;
  color: #64748b;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 400;
  padding: 60px;
  background-color: ${props => (props.lightTheme ? '#f9f9f9 ' : '#0f0f0f')};
  @media (max-width: 767px) {
    padding: 10px;
  }
`
export const ReactPlayerEl = styled.div`
  width: 100%;
  height: 500px;
  @media (max-width: 767px) {
    height: 200px;
  }
`
export const Title = styled.p`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  color: ${props => (props.lightTheme ? '#1e293b' : '#ffffff')};
`
export const ViewsBtnCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ViewsTimeCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;
`

export const BtnCards = styled.div`
  display: flex;
  align-items: center;
`

export const LikeBtn = styled.button`
  background-color: transparent;
  border-width: 0px;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  display: flex;
  align-items: center;
  color: ${props => (props.isActive ? '#2563eb' : '#64748b')};
  cursor: pointer;
`

export const DislikeBtn = styled.button`
  background-color: transparent;
  border-width: 0px;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  display: flex;
  align-items: center;
  color: ${props => (props.isActive ? '#2563eb' : '#64748b')};
  cursor: pointer;
`

export const SaveBtn = styled.button`
  background-color: transparent;
  border-width: 0px;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${props => (props.isActive ? '#2563eb' : '#64748b')};
`
export const ProfileDetailCard = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`

export const ProfileImg = styled.img`
  width: 40px;
  margin: 10px;
`
export const ChannelName = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.lightTheme ? '#1e293b' : '#ffffff')};
`
