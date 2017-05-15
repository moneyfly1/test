import { Platform } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'
import TabBar from './component/tabbar'
import Topic from './module/topic/screen'
import Login from './module/auth'

const HomeNavigator = TabNavigator({
    topic: Topic
}, {
    tabBarComponent: TabBar,
    initialRouteName: 'topic',
    tabBarPosition: 'bottom',
    lazy: true,
    tabBarOptions: {
        loginRequired: [],
        labelStyle: {
            fontSize: 12
        },
        style: {
            height: 50
        }
    }
})

const Navigator = StackNavigator({
    home: {
        screen: HomeNavigator
    },
    login:{
        screen: Login
    }
}, {
    initialRouteName: 'home',
    headerMode: 'none',
    cardStyle: Platform.OS === 'ios' ? 'modal' : 'card'
})

export default Navigator