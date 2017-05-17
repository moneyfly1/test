import { ListView } from 'react-native'
import { observable, action, computed } from 'mobx'
import * as service from './service'


class TopicStore {
    @observable list = []
    @observable selected = -1
    @observable pagination = {}
    @observable isFetched = false

    @action
    setSelected(index) {
        this.selected = this.list[index]
    }

    @action
    async fetchTopics() {
        let events = await service.events()
        this.list = events
        this.isFetched = true
    }

    _topicsDS = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    })

    @computed
    get topicsDS() {
        return this._topicsDS.cloneWithRows(this.list.slice())
    }
}

export default new TopicStore()