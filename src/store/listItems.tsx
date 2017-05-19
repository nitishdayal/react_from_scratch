import { action, observable, useStrict } from 'mobx';
import React from 'react';

useStrict(true);
class Store {
  @observable listItems = ['first item', 'second item', 'third item'];

  @action addItem = () => { this.listItems.push(prompt('Type stuff!') || 'Another item!'); };

  @action delItem = () => { this.listItems.pop(); };
}

export default new Store();
