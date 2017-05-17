import { Platform } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'
import TabBar from './component/tabbar'
import Topic from './module/topic'
import Login from './module/auth'

const HomeNavigator = TabNavigator({
    topic: {
        screen: Topic
    }
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

const MyNavigator = StackNavigator({
    home:{
        screen: HomeNavigator
    },
    login:{
        screen: Login
    }
}, {
    initialRouteName: 'home',
    headerMode: 'none',
    mode: Platform.OS === 'ios' ? 'modal' : 'card'
})

export default MyNavigator