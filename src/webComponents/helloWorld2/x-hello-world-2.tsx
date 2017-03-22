import { Component, propNumber, h, setProps } from 'skatejs';
import HttpHelloWorld from './components/HttpHelloWorld';
import * as css from './x-hello-world-2.less';

type HelloWorldProps = {
  id: number;
};

class HelloWorldComponent extends Component<HelloWorldProps> {

  static get props () {
    return {
      id: propNumber
    };
  }

  renderCallback({id}: HelloWorldProps) {
    return (
        <HttpHelloWorld id={ id } />
    );
  }
}

customElements.define('x-hello-world-2', HelloWorldComponent);