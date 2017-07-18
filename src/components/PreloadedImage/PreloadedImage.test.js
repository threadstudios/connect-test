import Inferno from 'inferno';
import { renderToSnapshot, renderIntoDocument, findRenderedDOMElementWithClass, findRenderedVNodeWithType } from 'inferno-test-utils';
import PreloadedImage from './PreloadedImage';

describe("A Preloaded Image Component", () => {

    it("should render without an error", () => {
        expect(renderToSnapshot(<PreloadedImage />)).toMatchSnapshot();
    })

    it("should display a loader before the image is displayed", () => {
        const Preloader = renderIntoDocument(<PreloadedImage url="https://www.jaguar.co.uk/Images/X540_72frame_turn_V03_Desktop_02_tcm91-387710_desktop_1366x768.jpg?v=2" className="foo" />);
        const result = findRenderedDOMElementWithClass(Preloader, "loading");
        expect(result).toBeDefined();
    })

    it("should display the image given it has loaded", () => {

        const wrapper = renderIntoDocument(<PreloadedImage 
        url="https://www.jaguar.co.uk/Images/X540_72frame_turn_V03_Desktop_01_tcm91-387710_desktop_1366x768.jpg?v=2" 
        className="foo"
         />);

        const preloader = findRenderedVNodeWithType(wrapper, PreloadedImage);
        preloader.children.updateStateValue(true);

        const imageContainer = findRenderedDOMElementWithClass(wrapper, 'foo--loaded');

        expect(imageContainer).toBeDefined();
        expect(renderToSnapshot(preloader)).toMatchSnapshot();

    })

})