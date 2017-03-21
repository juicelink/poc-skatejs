import { Component, propString, h, setProps } from 'skatejs';
import withMainCss from 'lib/mixins/withMainCss';
import * as css from './x-hello-world.less';

type HelloWorldProps = {
  name: string;
};

class HelloWorldComponent extends withMainCss<Component<HelloWorldProps>>(Component) {

  static get props () {
    return {
      name: propString
    };
  }

  renderCallback({ name }: HelloWorldProps) {
    return (
        <span>
          { this.withMainCss(css) }
          <div style={{ color: 'yellow' }} class={ `row ${css.locals.helloWorld}` }>
            Hello {name} !
          </div>
        </span>
    );
  }
}

customElements.define('x-hello-world', HelloWorldComponent);