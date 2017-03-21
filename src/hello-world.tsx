import { Component, propString, h, setProps } from 'skatejs';
import * as css from './hello-world.less';
import { SGComponent } from './lib';

type HelloWorldProps = {
  name: string;
};

class HelloWorldComponent extends SGComponent<HelloWorldProps> {

  static get props () {
    return {
      name: propString
    };
  }

  renderCallback({ name }: HelloWorldProps) {
    return (
        <div>
          { this.withMainCss(css) }
          <div style={{ color: 'yellow' }} class={ `row ${css.locals.helloWorld}` }>
            Hello {name} !
          </div>
        </div>
    );
  }
}

customElements.define('x-hello-world', HelloWorldComponent);