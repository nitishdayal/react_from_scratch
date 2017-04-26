import { observable, action } from 'mobx';
import remotedev from 'mobx-remotedev';


@remotedev
class Store {

  @observable listItems: string[]

  constructor() {
    this.listItems = ['first item', 'second item', 'third item']
  }

  @action addItem = () => this.listItems.push('new item!');
  @action delItem = () => this.listItems.pop();

}

export default remotedev(new Store())
