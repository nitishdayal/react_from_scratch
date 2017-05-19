import { observer } from 'mobx-react';
import React from 'react';

export default observer(({ listItems }: { listItems: string[] }) => {
  const displayItems = (li: string[]) => li.map((l, i) => (<li key={i} > {l} </li>));

  return (
    <ul style={{ padding: '0 2em' }}>
      {displayItems(listItems)}
    </ul>
  );
});
