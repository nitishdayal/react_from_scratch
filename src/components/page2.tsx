import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import store from '../store/listItems'


const DisplayList = observer(({ listItems }: { listItems: string[] }) => {
  const displayItems = listItems.map(
    (l, i) => <li key={i}>{l}</li>
  )

  return (
    <ul style={{ padding: '0 2em' }}>
      {displayItems}
    </ul>
  )
})

const Page2 = () => (
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

export default Page2;
