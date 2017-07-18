import Inferno from 'inferno';
import { renderToSnapshot } from 'inferno-test-utils';
import App from '../App';

describe("The core App Component", () => {

    window.__PROPS__ = {}

    it("should render without an error", () => {
        expect(renderToSnapshot(<App />)).toMatchSnapshot();
    })

})