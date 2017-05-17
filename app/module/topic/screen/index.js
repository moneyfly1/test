import React from 'react'
import {StackNavigator} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import Topics from '../'

export default StackNavigator({
    topics: {
        screen: Topics,
        navigationOptions:({navigation})=>({
            tabBarIcon:({focused,tintColor})=><Icon name="coffee" size={20} color={tintColor} />,
            tabBarLabel: '综合'
        })
    }
},{ initialRouteName: 'topics', headerMode: "none" })