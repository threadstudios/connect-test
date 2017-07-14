import Inferno from 'inferno';
import { renderToSnapshot } from 'inferno-test-utils';
import Welcome from './Welcome';

test('Welcome component renders without explosion', () => {
    expect(renderToSnapshot(<Welcome />)).toMatchSnapshot();
});