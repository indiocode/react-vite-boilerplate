import type { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';

import { AvatarImage } from './assets';
import { AppContainer, Avatar, AvatarContainer } from './styles';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/themes/global';

export function App(): ReactElement {
	return (
		<ThemeProvider theme={defaultTheme}>
			<AppContainer>
				<AvatarContainer>
					<Avatar
						src={AvatarImage}
						alt="Avatar indiocode"
					/>
					<a
						href="http://www.instagram.com/indiocode"
						target="_blank"
						rel="noopener noreferrer"
					>
						@indiocode
					</a>
				</AvatarContainer>

				<div>
					<h1>Welcome to React Vite Boilerplate</h1>
					<a
						href="http://www.github.com/indiocode/react-vite-boilerplate"
						target="_blank"
						rel="noopener noreferrer"
					>
						ver no github
					</a>
				</div>
			</AppContainer>

			<GlobalStyle />
		</ThemeProvider>
	);
}
