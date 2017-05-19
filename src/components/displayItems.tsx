import React from 'react';
import { observer } from 'mobx-react';


const displayItems = (li: string[]) => li.map((l, i) => (<li key={i} > {l} </li>));

export default observer(({ listItems }: { listItems: string[] }) => (
  <ul style={{ padding: '0 2em' }}>
    {displayItems(listItems)}
  </ul>
));
