import { render, screen } from '@testing-library/react';

import { Icon } from '@/components/Elements/Icon';

describe('components/Elements/Icon', () => {
  test('alt', () => {
    const randomText = (Math.random() + 1).toString(36).substring(7);

    render(<Icon src="/vite.svg" alt={randomText} size="md" />);
    expect(screen.getByAltText(randomText)).toBeInTheDocument();
  });

  test('Src', () => {
    const altText = 'alt';
    const randomText = (Math.random() + 1).toString(36).substring(7);

    render(<Icon src={randomText} alt={altText} size="md" />);
    expect(screen.getByAltText(altText)).toHaveAttribute('src', randomText);
  });
});
