import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { ListWrapper } from '../styled';

const DisplayList = observer(({ listItems }: { listItems: string[] }) => {
  const displayItems = listItems.map((l, i) => <li key={i}>{l}</li>);

  return (
    <ul style={{ padding: '0 2em' }}>
      {displayItems}
    </ul>
  );
});

const Page2 = ({ store }) => (
  <ListWrapper>
    <button onClick={store.addItem}>Add an item!</button>
    <DisplayList listItems={store.listItems} />
    <button onClick={store.delItem}>Delete an item!</button>
  </ListWrapper>
);

export default Page2;
