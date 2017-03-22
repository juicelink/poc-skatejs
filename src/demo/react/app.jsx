import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
  
  render() {
    return (
      <x-hello-world-2 id="1"></x-hello-world-2>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
