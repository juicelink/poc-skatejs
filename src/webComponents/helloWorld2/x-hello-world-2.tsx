import { Component, propString, h, setProps } from 'skatejs';
import WithGlobalCss from 'lib/components/WithGlobalCss';
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

  renderCallback({ name }: HelloWorldProps) {
    return (
        <WithGlobalCss styles={ css } >
          <div style={{ color: 'yellow' }} class={ `row ${css.locals.helloWorld}` }>
            Hello {name} !
          </div>
        </WithGlobalCss>
    );
  }
}

customElements.define('x-hello-world-2', HelloWorldComponent);