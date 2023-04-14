import { render, screen } from '@testing-library/react';

import { Spinner } from '@/components/Elements/Spinner';

describe('components/Elements/Spinner', () => {
  test('Text', () => {
    render(<Spinner />);
    expect(screen.getByText('Loading')).toBeInTheDocument();
  });
});
