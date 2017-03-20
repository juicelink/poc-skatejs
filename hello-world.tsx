import * as skate from 'skatejs';
import * as css from "./hello-world.css";

interface HelloWorldProps {
  name: string;
}

class HelloWorldComponent extends skate.Component<HelloWorldProps> implements HelloWorldProps {
  static get is() { return 'x-hello-world' }
  static get props(): skate.ComponentProps<HelloWorldComponent, HelloWorldProps> {
    return {
      name: skate.prop.string({
        attribute: true
      })
    }
  }

  name: string;

  renderCallback(): any {
    return [
      <style>{css.toString()}</style>,
      <div class={css.locals.helloWorld}>
        Hello {this.name} !
      </div>
    ];
  }
}

skate.define(HelloWorldComponent);