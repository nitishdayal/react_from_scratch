import * as React from 'react';

export interface HelloProps { 
  compiler: string; 
  framework: string;
  bundler: string;
}

export class App extends React.Component<HelloProps, undefined> {
  private message = `Hello from ${this.props.framework}, running on ${this.props.compiler}
     and bundled with ${this.props.bundler}`
  render() {
    return <h1>{this.message}!</h1>
  }
}
