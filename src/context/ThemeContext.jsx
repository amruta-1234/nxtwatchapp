import React from 'react'

const ThemeContext = React.createContext({
  showLightTheme: true,
  changeTheme: () => {},
  savedVideoList: [],
  onSavedVideo: () => {},
  onUnsavedVideo: () => {},
})

export default ThemeContext
