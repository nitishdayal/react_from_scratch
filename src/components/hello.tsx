import React from 'react';
import { Link } from 'react-router-dom';

const App = ({ bundler, compiler, framework }: HelloProps) => (
  <div>
    <h1>Hello from {framework}, running on {compiler} and bundled with {bundler}!</h1>
    <Link to={`/page2`}>Page 2</Link>
  </div>
)

export default App;
