import React from 'react'
import { View } from 'react-native'
import { injectRequest } from './lib'
import Navigator from './navigator'

injectRequest()

/** wait for react-navigation fix these warnings */
console.ignoredYellowBox = ['Warning: BackAndroid','Warning: View.propTypes']

class App extends React.Component{
    render(){
        return <Navigator />
    }
}

export default App