import { render, screen } from '@testing-library/react';

import { ReactIcon } from '@/features/Top/IconList/ReactIcon';

import reactLogo from '@/assets/react.svg';

describe('features/Top/IconList/ReactIcon Link', () => {
  test('href', () => {
    render(<ReactIcon />);
    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://reactjs.org');
  });

  test('newTab', () => {
    render(<ReactIcon />);
    expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');
    expect(screen.getByRole('link')).toHaveAttribute('rel', 'noreferrer');
  });
});

describe('features/Top/IconList/ReactIcon Icon', () => {
  const altText = 'React logo';

  test('alt', () => {
    render(<ReactIcon />);
    expect(screen.getByAltText(altText)).toBeInTheDocument();
  });

  test('src', () => {
    render(<ReactIcon />);
    expect(screen.getByAltText(altText)).toHaveAttribute('src', reactLogo);
  });
});
