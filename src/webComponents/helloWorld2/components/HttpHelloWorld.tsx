import { h, Component } from 'preact';
import HelloWorld from './HelloWorld';

type State = {
    lastName: string;
}

type Props = {
    name: string;
}

export default class HttpHelloWorld extends Component<Props,State> {
    componentDidMount() {
        fetch('/data.json')
            .then(d => d.json())
            .then(({ name }: any) => this.setState({ lastName: name }));
    }

    render({name}: Props, {lastName}: State) {
        return <HelloWorld name={`${name} ${lastName}`}/>;
    }
}