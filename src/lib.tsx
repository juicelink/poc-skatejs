import { Component, h } from 'skatejs';

let mainCssUrl: string;

type Constructable<T extends Object> = new (...args: any[]) => T;

type Styles = { toString: () => string} | string;

export interface WithMainCss {
    withMainCss: (styles?: Styles) => JSX.Element;
}

export const WithMainCss = <T extends Object>( Base: Constructable<T>) => {
  const extendedClass: any = class extends (Base as Constructable<Object>) implements WithMainCss {
    withMainCss = (styles?: Styles) => (styles || mainCssUrl) ? <style>
        { mainCssUrl ? `@import url(${mainCssUrl})` : null };
        { styles? styles.toString() : null }
      </style> : null
  };

  return extendedClass as Constructable<T & WithMainCss>;
}

export class SGComponent<T> extends WithMainCss<Component<T>>(Component) {
  
}

const supportShadowDom = !(window as any).CustomElementRegistry.prototype.polyfilled;

const SGComponentsConfig = {
    setMainCss: (url: string) => { if (supportShadowDom) mainCssUrl = url; }
};

(window as any).SGComponentsConfig = SGComponentsConfig;
