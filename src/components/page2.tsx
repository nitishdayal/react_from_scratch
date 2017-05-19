import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { ListWrapper } from './styled';
import DisplayList from './displayItems';


const Page2 = ({ store }) => (
  <ListWrapper>
    <button onClick={store.addItem}>Add an item!</button>
    <DisplayList listItems={store.listItems} />
    <button onClick={store.delItem}>Delete an item!</button>
  </ListWrapper>
);

export default Page2;
