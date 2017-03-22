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

    async fetchData(id: number) {
        const result = await fetch('/data.json');
        const { name } = await result.json();
        this.setState({ name: `${id} ${name}` });
    }

    componentDidMount(){
        this.fetchData(this.props.id);
    }

    componentWillReceiveProps({id}: Props){
        this.fetchData(id);
    }

    shouldComponentUpdate(_: Props, nextState: State) {
        return JSON.stringify(this.state) !== JSON.stringify(nextState);
    }

    render(_: Props, state: State) {
        return <HelloWorld {...state}/>;
    }
}