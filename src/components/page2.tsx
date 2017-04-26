import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { observer } from 'mobx-react';
import { observable } from 'mobx';



const listItems = observable(['first item', 'second item', 'third item'])

@observer class Page2 extends Component<{}, {}> {


  addItem = () => listItems.push('New item!')

  render() {

    const displayList = listItems.map((li, i) => (<li key={i}>{li}</li>))

    return (
      <div>
        <button onClick={this.addItem}>Add an item!</button>
        <ul>
          {displayList}
        </ul>
      </div>
    )
  }
}

export default Page2;
