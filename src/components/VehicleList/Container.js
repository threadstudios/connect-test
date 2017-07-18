import Inferno from 'inferno';
import { compose, withLifeCycle, defaultProps } from 'incompose';
import Vehicle from './Vehicle';

const List = ({vehicles}) => {
    return (
        <div className="vehicle_list">
            {vehicles.map((vehicle) => {
                return <Vehicle {...vehicle} />
            })}
        </div>
    );
}

export default compose(
    defaultProps({
        vehicles: []
    })
)(List);