const registerCustomElement = require('./lib').default;
import * as css from './hello-world.css';

import { h } from 'preact';

const HelloWorldComponent = ({ name = "World", children }: any) => (
	<p>hello {name} { children }</p>
);

registerCustomElement(HelloWorldComponent, "x-hello-world");
