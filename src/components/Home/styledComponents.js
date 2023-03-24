import styled from 'styled-components'

export const SidebarHomeContainer = styled.div`
  display: flex;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  background-color: ${props => (props.lightTheme ? '#f9f9f9 ' : '#181818')};
`
export const BannerSection = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 250px;
  width: 100%;
  font-family: Roboto;
  color: #1e293b;
  font-size: 16px;
  font-weight: 500;
  padding: 15px;
  @media (max-width: 767px) {
    height: 150px;
    margin-bottom: 15px;
  }
`
export const CloseBtn = styled.button`
  background-color: transparent;
  border-width: 0px;
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`
export const Logo = styled.img`
  width: 120px;
`
export const GetItNowBtn = styled.button`
  align-self: flex-start;
  background-color: transparent;
  border: 1px solid #1e293b;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  padding: 10px;
  border-radius: 2px;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 5px;
  @media (max-width: 767px) {
    font-size: 12px;
    padding: 5px;
    margin: 5px;
  }
`
export const SearchInputCard = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  margin: 15px;
`
export const SearchInput = styled.input`
  font-size: 15px;
  height: 28px;
  width: 400px;
  background-color: transparent;
  border: 1px solid #606060;
`
export const SearchBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  height: 28px;
  width: 50px;
  border: 1px solid #606060;
  color: ${props => (props.lightTheme ? '#424242' : '#ffffff')};
  background-color: ${props => (props.lightTheme ? '#f9f9f9 ' : '#475569')};
`
export const VideoListCard = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`
export const FailureCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  color: ${props => (props.lightTheme ? '#1e293b' : '#ffffff')};
  font-size: 16px;
  font-weight: 500;
  background-color: ${props => (props.lightTheme ? '#f9f9f9 ' : '#181818')};
  padding: 40px;
  height: 100%;
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
