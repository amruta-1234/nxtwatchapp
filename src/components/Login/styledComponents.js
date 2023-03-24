import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  height: 100vh;
  background-color: ${props => (props.lightTheme ? '#ffffff' : '#212121')};
`

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
  box-shadow: ${props => (props.lightTheme ? '0px 1px 5px 5px #cccccc' : null)};
  width: 25vw;
  background-color: ${props => (props.lightTheme ? '#ffffff' : '#181818')};
  @media (max-width: 767px) {
    width: 90vw;
    padding: 5px;
  }
`
export const Logo = styled.img`
  width: 150px;
  margin: 30px;
`
export const FormCard = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  width: 90%;
  @media (max-width: 767px) {
    width: 80%;
  }
`

export const Label = styled.label`
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  color: ${props => (props.lightTheme ? '#475569' : '#ffffff')};
  margin-bottom: 5px;
  @media (max-width: 767px) {
    font-size: 12px;
  }
`
export const Input = styled.input`
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  color: #475569;
  margin-bottom: 15px;
  padding: 3px;
  @media (max-width: 767px) {
    font-size: 12px;
  }
`

export const CheckboxCard = styled.div`
  align-self: flex-start;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  color: ${props => (props.lightTheme ? '#1e293b' : '#ffffff')};
  margin-bottom: 10px;
`

export const SubmitBtn = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  border-width: 0px;
  border-radius: 5px;
  padding: 10px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
  margin: 10px;
  cursor: pointer;
`
export const ErrorMsg = styled.p`
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  color: #ff0000;
  margin-bottom: 5px;
`
