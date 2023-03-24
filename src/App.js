import {Component} from 'react'

import {Redirect, Switch, Route} from 'react-router-dom'
import ThemeContext from './context/ThemeContext'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import NotFound from './components/NotFound'

import './App.css'

// Replace your code here
class App extends Component {
  state = {showLightTheme: true, savedVideoList: []}

  onSavedVideo = video => {
    const {savedVideoList} = this.state
    const isSaved = savedVideoList.find(each => each.id === video.id)
    if (isSaved === undefined) {
      this.setState(prevState => ({
        savedVideoList: [...prevState.savedVideoList, video],
      }))
    }
  }

  onUnsavedVideo = id => {
    const {savedVideoList} = this.state
    const updatedList = savedVideoList.filter(video => video.id !== id)
    this.setState({savedVideoList: updatedList})
  }

  onToggleTheme = () => {
    this.setState(prevState => ({
      showLightTheme: !prevState.showLightTheme,
    }))
  }

  render() {
    const {showLightTheme, savedVideoList} = this.state

    return (
      <ThemeContext.Provider
        value={{
          showLightTheme,
          changeTheme: this.onToggleTheme,
          onSavedVideo: this.onSavedVideo,
          onUnsavedVideo: this.onUnsavedVideo,
          savedVideoList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
