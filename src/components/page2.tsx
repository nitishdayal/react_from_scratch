import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import DisplayList from './displayItems';
import { ListWrapper } from './styled';

export default ({ store }) => (
  <ListWrapper>
    <button onClick={store.addItem}>Add an item!</button>
    <DisplayList listItems={store.listItems} />
    <button onClick={store.delItem}>Delete an item!</button>
  </ListWrapper>
);
