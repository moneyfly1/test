import {StackNavigator} from 'react-navigation'
import Topics from '../'

export default StackNavigator({
    topics: {
        screen: Topics,
        navigationOptions:{
            tabBar: ({state})=>({
                label: '综合',
                icon: ({focused,tintColor})=><Icon name="coffee" size={20} color={tintColor} />
            })
        }
    }
})