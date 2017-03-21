import { h, Component } from 'preact';
import { config, supportShadowDom } from 'lib/config';

 type Props = {
     styles?: { toString: () => string} | string;
     children?: JSX.Element[] | JSX.Element;
     withGlobal?: boolean;
 }

const WithCss = ({styles, withGlobal, children}: Props) => {
    const { mainCssUrl } = config();
    const addGlobal = withGlobal && mainCssUrl && supportShadowDom;
    return (
        <span>
            { (styles || addGlobal) ?
                    <style>
                        { addGlobal ? `@import url(${mainCssUrl});` : null }
                        { styles? styles.toString() : null }
                    </style> : null
            }
            { children }
        </span>);
}

export default WithCss;