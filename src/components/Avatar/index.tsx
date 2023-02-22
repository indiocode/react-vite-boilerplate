import type { ImgHTMLAttributes, ReactElement } from 'react';

import { AvatarContainer } from './styles';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
	size: number;
}
export function Avatar({ size, ...rest }: AvatarProps): ReactElement {
	return (
		<AvatarContainer
			size={size}
			{...rest}
		/>
	);
}
