/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

interface AvatarContainerProps {
	size: number;
}

export const AvatarContainer = styled.img<AvatarContainerProps>`
	max-width: ${({ size }) => `${size}px`};
	max-width: ${({ size }) => `${size}px`};
	border-radius: 9999px;
`;
