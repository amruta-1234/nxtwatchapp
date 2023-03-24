import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'
import {
  MainContainer,
  SubContainer,
  Logo,
  FormCard,
  Label,
  Input,
  CheckboxCard,
  SubmitBtn,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onToggleCheckbox = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  onsubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitError = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onsubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitError(data.error_msg)
    }
  }

  render() {
    const {
      username,
      password,
      showPassword,
      errorMsg,
      showSubmitError,
    } = this.state

    const inputType = showPassword ? 'text' : 'password'

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {showLightTheme} = value
          const logoUrl = showLightTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          return (
            <MainContainer lightTheme={showLightTheme}>
              <SubContainer lightTheme={showLightTheme}>
                <Logo src={logoUrl} alt="website logo" />
                <FormCard onSubmit={this.onSubmitForm}>
                  <Label htmlFor="username" lightTheme={showLightTheme}>
                    USERNAME
                  </Label>
                  <Input
                    id="username"
                    type="text"
                    value={username}
                    onChange={this.onChangeUsername}
                    placeholder="Username"
                  />
                  <Label htmlFor="password" lightTheme={showLightTheme}>
                    PASSWORD
                  </Label>
                  <Input
                    id="password"
                    type={inputType}
                    value={password}
                    onChange={this.onChangePassword}
                    placeholder="Password"
                  />
                  <CheckboxCard lightTheme={showLightTheme}>
                    <input
                      onClick={this.onToggleCheckbox}
                      type="checkbox"
                      id="checkbox"
                    />
                    <label htmlFor="checkbox">Show Password</label>
                  </CheckboxCard>
                  <SubmitBtn type="submit">Login</SubmitBtn>
                  {showSubmitError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
                </FormCard>
              </SubContainer>
            </MainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
