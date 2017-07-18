import Inferno from 'inferno';
import fetch from 'isomorphic-fetch';
import Loading from '../Loading/Loading';
import ErrorComponent from '../Error/Error';
import Image from '../PreloadedImage';
import {compose, branch, withLifecycle, withState, defaultProps, renderComponent} from 'incompose';

const Vehicle = (props) => {
    return (
        <div className={props.className}>
            <Image className="vehicle_image" url={props.media[0].url} />
            <div className="vehicle_description">
                <h1><span>{props.id.toUpperCase()}</span></h1>
                <h2>From {props.data.price}</h2>
                <p>{props.data.description}</p>
            </div>
        </div>
    );
}

const fetchData = (id) => {
    const apiUrl = process.env.API_URL ? process.env.API_URL : __CONFIG__.API_URL;
    return new Promise((resolve, reject) => {
        fetch(`${apiUrl}api/vehicle/${id}`)
        .then((result) => {
            return result.json();
        })
        .then((json) => {
            return resolve(json);
        })
        .catch((err) => {
            return reject(err);
        });
    })
}

const withLoadingComponent = branch(
    (props) => props.loading,
    renderComponent(Loading)
);

const withErrorComponent = branch(
    (props) => props.error,
    renderComponent(ErrorComponent)
)

const withFetcher = branch(
    (props) => !props.data,
    withLifecycle({
        componentDidMount() {
            this.setState({loading: true});
            fetchData(this.props.id)
            .then((result) => {
                this.setState({
                    loading: false,
                    data : result
                })
            })
            .catch((err) => {
                this.setState({
                    loading: false,
                    error: true,
                    msg: err.message
                })
            });
        }
    })
)   

export default compose(
    withState('data', 'setData', false),
    withState('loading', 'setLoading', true),
    withState('error', 'setError', false),
    withState('msg', 'setErrorMsg', false),
    defaultProps({ className : 'vehicle' }),
    withFetcher,
    withLoadingComponent,
    withErrorComponent
)(Vehicle)