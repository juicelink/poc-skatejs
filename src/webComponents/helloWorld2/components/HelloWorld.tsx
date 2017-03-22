import { h } from 'skatejs';
import WithGlobalCss from 'lib/components/WithGlobalCss';
import * as css from '../x-hello-world-2.less';

const HelloWorld= ({ name }: { name: string }) =>
        <WithGlobalCss styles={ css } >
          <div style={{ color: 'yellow' }} class={ `row ${css.locals.helloWorld}` }>
            Hello {name} !
          </div>
        </WithGlobalCss>;

export default HelloWorld;