/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled, { css } from 'styled-components';

const TextGradientBase = css`
	color: ${({ theme }) => theme.green};
`;

export const AppContainer = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1.5rem;

	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);

	text-align: center;

	h1,
	a {
		${TextGradientBase}
	}

	a {
		text-decoration: none;
		font-size: 1.2rem;
		border-bottom: 1px solid ${({ theme }) => theme.green};
	}
`;

export const AvatarContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;
