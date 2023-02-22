import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { Avatar } from '~/components/Avatar';

describe('Avatar Component', () => {
	afterEach(cleanup);

	it('must be able to render an avatar with a specific size', () => {
		const { getByRole } = render(<Avatar size={150} />);

		expect(getByRole('img')).toHaveAttribute('size');

		expect(getByRole('img').getAttribute('size')).toBe(String(150));

		// screen.debug();
	});
});
