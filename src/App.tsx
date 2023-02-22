import type { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';

import { AvatarImage } from './assets';
import { Avatar } from './components/Avatar';
import { AppContainer, AvatarContainer } from './styles';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/themes/global';

export function App(): ReactElement {
	return (
		<ThemeProvider theme={defaultTheme}>
			<AppContainer>
				<AvatarContainer>
					<Avatar
						size={150}
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
					<h1>React Vite Boilerplate</h1>
					<a
						href="http://www.github.com/indiocode/react-vite-boilerplate"
						target="_blank"
						rel="noopener noreferrer"
					>
						on github
					</a>
				</div>
			</AppContainer>

			<GlobalStyle />
		</ThemeProvider>
	);
}
