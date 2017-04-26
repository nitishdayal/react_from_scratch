import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { observer } from 'mobx-react';
import store from '../store/listItems'

class Page2 extends Component<{}, {}> {

  render() {

    return (
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'baseline'
      }}>
        <button onClick={store.addItem}>Add an item!</button>
        <DisplayList listItems={store.listItems} />
        <button onClick={store.delItem}>Delete an item!</button>
      </div>
    )
  }
}


export const DisplayList = observer(({ listItems }: { listItems: string[] }) => {
  const displayItems = listItems.map(
    (l, i) => <li key={i}>{l}</li>
  )

  return (
    <ul style={{ padding: '0 2em' }}>
      {displayItems}
    </ul>
  )
})

export default Page2;
