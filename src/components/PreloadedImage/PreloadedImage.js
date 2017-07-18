import Inferno from 'inferno';
import { compose, branch, withLifecycle, withState, renderComponent, defaultProps } from 'incompose';
import Loading from '../Loading/Loading';

const PreloadedImage = ({url, className, loaded}) => {
    return (
        <div className={[className, loaded ? `${className}--loaded` : ''].join(' ')} style={{backgroundImage: `url(${url})` }}></div>
    );
}

export default compose(
    withState('loaded', 'setLoaded', false),
    branch(
        (props) => !props.loaded,
        withLifecycle({
            componentDidMount() {
                const img = new Image();
                img.src = this.props.url;
                img.onload = () => {
                    this.props.setLoaded(true);
                }
            }
        })
    ),
    branch(
        (props) => !props.loaded,
        renderComponent(Loading)
    )
)(PreloadedImage);