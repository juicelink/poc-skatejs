import { h, Component } from 'preact';
import HelloWorld from './HelloWorld';

type State = {
    name: string;
}

type Props = {
    id: number;
}

export default class HttpHelloWorld extends Component<Props,State> {

    constructor(){
        super();
        this.state = {
            name: ''
        }
    }

    componentWillReceiveProps({id}: Props){
        fetch('/data.json')
            .then(d => d.json())
            .then(({ name }: any) => this.setState({ name: `${id} ${name}` }));
    }

    render(_: Props, state: State) {
        return <HelloWorld {...state}/>;
    }
}