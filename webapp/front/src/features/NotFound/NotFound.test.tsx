import { render, screen } from '@testing-library/react';

import { NotFound } from '@/features/NotFound';

describe('features/NotFound', () => {
  test('Text', () => {
    render(<NotFound />);
    expect(screen.getByText('404: Not Found')).toBeInTheDocument();
  });
});
