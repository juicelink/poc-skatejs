import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
    };
  }
  
  componentWillMount() {
    setInterval(() => this.setState({ id: this.state.id + 1 }), 5000);
  }
  render() {
    return (
      <x-hello-world-2 id={ this.state.id}></x-hello-world-2>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
