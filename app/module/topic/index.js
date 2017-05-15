import React from 'react'
import { View, Text } from 'react-native'
import container from '../../lib/container'
import store from './store'

@container({store})
class Topics extends React.Component {
    render() {
        return (
            <View>
                <Text>topics</Text>
            </View>
        )
    }
}

export default Topics