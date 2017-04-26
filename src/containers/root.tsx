import React from 'react';
import DevTools from 'mobx-react-devtools'

const container = ({ children }: RootContainerProps) => <div>{children}<DevTools /></div>;

export default container;
