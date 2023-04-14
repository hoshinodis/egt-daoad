import { render, screen } from '@testing-library/react';

import { ViteIcon } from '@/features/Top/IconList/ViteIcon';

describe('features/Top/IconList/ViteIcon Link', () => {
  test('href', () => {
    render(<ViteIcon />);
    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://vitejs.dev');
  });

  test('newTab', () => {
    render(<ViteIcon />);
    expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');
    expect(screen.getByRole('link')).toHaveAttribute('rel', 'noreferrer');
  });
});

describe('features/Top/IconList/ViteIcon Icon', () => {
  const altText = 'Vite logo';

  test('alt', () => {
    render(<ViteIcon />);
    expect(screen.getByAltText(altText)).toBeInTheDocument();
  });

  test('src', () => {
    render(<ViteIcon />);
    expect(screen.getByAltText(altText)).toHaveAttribute('src', '/vite.svg');
  });
});
