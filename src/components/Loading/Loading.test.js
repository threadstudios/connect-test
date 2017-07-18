import Inferno from 'inferno';
import { renderToSnapshot, renderIntoDocument, findRenderedDOMElementWithClass } from 'inferno-test-utils';
import Loading from './Loading';

describe("A Loading Component", () => {

    it("should render without an error", () => {
        expect(renderToSnapshot(<Loading />)).toMatchSnapshot();
    })

    it("should take a passed class", () => {
        const Loader = renderIntoDocument(<Loading className="foo" />);
        const result = findRenderedDOMElementWithClass(Loader, "loading");
        expect(result.className).toBe("loading foo");
    })

})