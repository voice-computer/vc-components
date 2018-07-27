import sys from 'system-components';
import styled from 'styled-components';

export const ImageContainer = styled.div`
	flex: 1 30%;
	@media screen and (max-width: 40em) {
		overflow: hidden;
	}
`;

export const Image = sys({
	is: 'img',
	maxWidth: ['300px', '400px', '400px'],
	m: ['0 -38.885%', 0, 0],
	width: ['177.777%', '100%', '100%']
});
