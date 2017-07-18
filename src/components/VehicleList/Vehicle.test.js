import Inferno from 'inferno';
import { renderToSnapshot, renderIntoDocument, findRenderedDOMElementWithClass, findRenderedVNodeWithType } from 'inferno-test-utils';
import Vehicle from './Vehicle';
import vehicles from 'technical-test/server_api/vehicles';
import individualVehicle from 'technical-test/server_api/vehicle_xe';

describe("A Vehicle Component", () => {

    const vehicleData = vehicles.vehicles[0];

    window.__CONFIG__ = {API_URL : '/'}

    it("should render without an error", () => {
        expect(renderToSnapshot(<Vehicle />)).toMatchSnapshot();
    })

    it("should display a loader before the vehicle is displayed", () => {
        const wrapper = renderIntoDocument(<Vehicle className="foo" {...vehicleData} />);
        const result = findRenderedDOMElementWithClass(wrapper, "loading");
        expect(result).toBeDefined();
    })

    it("should display the vehicle information when it is fetched", (done) => {

        const wrapper = renderIntoDocument(<Vehicle className="foo" {...vehicleData} />);
        const vehicle = findRenderedVNodeWithType(wrapper, Vehicle);

        // Set the state to be loaded
        vehicle.children.updateStateValue({
            data : individualVehicle,
            loading: false
        }, () => {
            expect(renderToSnapshot(vehicle)).toMatchSnapshot();
            done();
        });

    })

})