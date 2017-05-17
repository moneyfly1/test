import React from 'react'
import { View, Text, ListView } from 'react-native'
import autobind from 'autobind-decorator'
import { WebView } from '../../component'
import container from '../../lib/container'
import store from './store'

@container({ store })
class Topic extends React.Component {
    componentDidMount() {
        const { store } = this.props
        store.fetchTopics()
    }
    @autobind
    renderRow(row) {
        return (
            <View key={row.id}>
                <Text>{row.id}</Text>
            </View>
        )
    }
    render() {
        const { store } = this.props
        return (
            <View>
                <Text>Topic</Text>
                <ListView dataSource={store.topicsDS} renderRow={this.renderRow} enableEmptySections={true} />
            </View>
        )
    }
}

export default Topic