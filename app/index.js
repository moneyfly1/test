import { View } from 'react-native'
import { injectRequest } from './lib'
import Navigator fromn './navigator'

injectRequest()

class App extends React.Component{
    render(){
        return <Navigator />
    }
}