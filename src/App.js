import Inferno from 'inferno';
import Component from 'inferno-component';
import Welcome from './components/Welcome/Welcome';

class App extends Component {
    render() {
        return (
            <section id="app">
                <Welcome />
            </section>
        );
    }
}

export default App;