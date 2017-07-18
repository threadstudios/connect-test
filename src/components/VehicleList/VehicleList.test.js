import Inferno from 'inferno';
import { renderToSnapshot } from 'inferno-test-utils';
import VehicleList from './Container';
import vehicles from 'technical-test/server_api/vehicles';

describe("A Vehicle List Component", () => {
    
    window.__CONFIG__ = {API_URL : '/'}

    it("should render without an error", () => {
        expect(renderToSnapshot(<VehicleList {...vehicles} />)).toMatchSnapshot();
    })

})