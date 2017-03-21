import { h } from 'preact';
import WithCss from './WithCss';

 type Props = {
     styles?: { toString: () => string} | string;
     children?: JSX.Element[] | JSX.Element;
 }

export default (props: Props) => <WithCss {...props} withGlobal />