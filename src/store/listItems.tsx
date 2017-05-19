import { action, observable, computed, useStrict } from 'mobx';

useStrict(true);
export default class Store {

  @observable listItems = ['first item', 'second item', 'third item'];

  @action addItem = () => { this.listItems.push(prompt('Type stuff!') || 'Another item!'); };

  @action delItem = () => { this.listItems.pop(); };

}
