import React from 'react';

const App = (props: HelloProps) => <h1>{getMessage(props)}</h1>

const getMessage =
  ({ bundler, compiler, framework }: HelloProps) =>
    `Hello from ${framework}, running on ${compiler} and bundled with ${bundler}!`;

export default App;
