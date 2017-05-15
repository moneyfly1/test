import { observable, action } from 'mobx'

export default class TopicStore {
    @observable list = []
    @observable selected = list[0]
    @observable pagination = {}

    @action
    setSelected(index){
        this.selected = this.list[index]
    }
}