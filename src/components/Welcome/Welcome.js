import Inferno from 'inferno';
import Component from 'inferno-component';

class Welcome extends Component {
    handleClick() {
        alert('That tickles nooo!');
    }
    render() {
        return (
            <div className="welcome">
                <h3>Threadbare</h3>
                <hr />
                <p>Threadbare is a basis for building isometric inferno apps easily.</p>
                <p>In its default form it carries very few dependencies and is meant to be as lean as possible</p>
                <h5>Development</h5>
                <p>To start the application in a development environment run:</p>
                <pre><code>yarn dev</code></pre>
                <p>By default this will build the front end javascript and restart the server on demand, all that is left for you to do is refresh.</p>
                <h5>Production</h5>
                <p>To build the application for production run:</p>
                <pre><code>yarn build</code></pre>
                <p>This will uglify and minify the front end assets.</p>
            </div>
        )
    }
}

export default Welcome;