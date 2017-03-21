window.SGComponentsConfig = window.SGComponentsConfig || {};

export const config = () => window.SGComponentsConfig;

export const supportShadowDom = !(window as any).CustomElementRegistry.prototype.polyfilled;
