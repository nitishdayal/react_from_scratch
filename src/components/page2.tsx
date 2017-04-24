import React from 'react';
import { Link } from 'react-router-dom';

const Page2 = () => (
  <div>
    <h1>Welcome to Page 2</h1>
    <ul>
      <li>It's</li>
      <li>an</li>
      <li>unordered</li>
      <li>list!</li>
    </ul>
    <Link to={`/`}>Back</Link>
  </div>
);

export default Page2;
