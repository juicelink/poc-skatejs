import { h } from 'skatejs';
import { Constructable } from './base';
import { config, supportShadowDom } from '../config';

type Styles = { toString: () => string } | string;

export interface WithMainCss {
  withMainCss: (styles?: Styles) => JSX.Element;
}

const WithMainCss = <T extends Object>(Base: Constructable<T>) => {
  const extendedClass: any = class extends (Base as Constructable<Object>) implements WithMainCss {
    withMainCss(styles?: Styles) {
      const { mainCssUrl } = config();
      const addGlobal = mainCssUrl && supportShadowDom;
      return (styles || addGlobal) ? <style>
        {addGlobal ? `@import url(${mainCssUrl});` : null}
        {styles ? styles.toString() : null}
      </style> : null
    };
  }

  return extendedClass as Constructable<T & WithMainCss>;
};

export default WithMainCss;