import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

import { Link } from '@/components/Elements/Link';

describe('components/Elements/Link Common', () => {
  test('using <a> tag', () => {
    const router = createMemoryRouter([{ path: '/', element: <Link href="/to">Link Test</Link> }]);

    render(<RouterProvider router={router} />);
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  test('Text', () => {
    const randomText = (Math.random() + 1).toString(36).substring(7);

    const router = createMemoryRouter([
      { path: '/', element: <Link href="/to">{randomText}</Link> },
    ]);

    render(<RouterProvider router={router} />);
    expect(screen.getByText(randomText)).toBeInTheDocument();
  });
});

describe('components/Elements/Link Internal Url', () => {
  test('Href Text', () => {
    const randomText = `/${(Math.random() + 1).toString(36).substring(7)}`;

    const router = createMemoryRouter([
      { path: '/', element: <Link href={randomText}>Link Test</Link> },
    ]);

    render(<RouterProvider router={router} />);
    expect(screen.getByRole('link')).toHaveAttribute('href', randomText);
  });

  test('newTab=false', () => {
    const router = createMemoryRouter([{ path: '/', element: <Link href="/to">Link Test</Link> }]);

    render(<RouterProvider router={router} />);
    expect(screen.getByRole('link')).not.toHaveAttribute('target');
    expect(screen.getByRole('link')).not.toHaveAttribute('rel');
  });

  test('newTab=true', () => {
    const router = createMemoryRouter([
      {
        path: '/',
        element: (
          <Link href="/to" newTab>
            Link Test
          </Link>
        ),
      },
    ]);

    render(<RouterProvider router={router} />);
    expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');
    expect(screen.getByRole('link')).toHaveAttribute('rel', 'noreferrer');
  });
});

describe('components/Elements/Link External Url', () => {
  test('Href Text', () => {
    const randomText = `https://example.com/${(Math.random() + 1).toString(36).substring(7)}`;

    const router = createMemoryRouter([
      { path: '/', element: <Link href={randomText}>Link Test</Link> },
    ]);

    render(<RouterProvider router={router} />);
    expect(screen.getByRole('link')).toHaveAttribute('href', randomText);
  });

  test('newTab=false', () => {
    const router = createMemoryRouter([
      { path: '/', element: <Link href="https://example.com/to">Link Test</Link> },
    ]);

    render(<RouterProvider router={router} />);
    expect(screen.getByRole('link')).not.toHaveAttribute('target');
    expect(screen.getByRole('link')).not.toHaveAttribute('rel');
  });

  test('newTab=true', () => {
    const router = createMemoryRouter([
      {
        path: '/',
        element: (
          <Link href="https://example.com/to" newTab>
            Link Test
          </Link>
        ),
      },
    ]);

    render(<RouterProvider router={router} />);
    expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');
    expect(screen.getByRole('link')).toHaveAttribute('rel', 'noreferrer');
  });
});
