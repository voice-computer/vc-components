import { theme } from './theme';

describe('voice computer theme', () => {
	it('should have a theme with colors and fonts', () => {
		expect(theme).toMatchSnapshot();
	});
});
