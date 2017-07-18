import Inferno from 'inferno';
import Component from 'inferno-component';
import VehicleList from './components/VehicleList';

class App extends Component {
    componentDidMount() {
        // set SSR state
        this.setState(__PROPS__);
    }
    render() {
        return (
            <section id="app">
                <VehicleList {...this.state} />
            </section>
        );
    }
}

export default App;