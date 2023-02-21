import styled from 'styled-components';

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

	a {
		color: cornflowerblue;
		text-decoration: none;
		font-size: 1.2rem;
	}
`;

export const AvatarContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

export const Avatar = styled.img`
	max-width: 9.375rem;
	max-width: 9.375rem;
	border-radius: 9999px;
`;
