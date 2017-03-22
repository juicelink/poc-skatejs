import { Component, propString, h, setProps } from 'skatejs';
import HttpHelloWorld from './components/HttpHelloWorld';
import * as css from './x-hello-world-2.less';

type HelloWorldProps = {
  name: string;
};

class HelloWorldComponent extends Component<HelloWorldProps> {

  static get props () {
    return {
      name: propString
    };
  }

  renderCallback({name}: HelloWorldProps) {
    return (
        <HttpHelloWorld name={ name } />
    );
  }
}

customElements.define('x-hello-world-2', HelloWorldComponent);