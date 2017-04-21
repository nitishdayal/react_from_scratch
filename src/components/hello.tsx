import React from 'react';

const App = ({ bundler, compiler, framework }: HelloProps) =>
  <h1>Hello from {framework}, running on {compiler} and bundled with {bundler}!</h1>;

export default App;
