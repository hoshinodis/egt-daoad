import { render, screen } from '@testing-library/react';

import { Card } from '@/components/Elements/Card';

describe('components/Elements/Card', () => {
  test('Text', () => {
    const randomText = (Math.random() + 1).toString(36).substring(7);

    render(<Card>{randomText}</Card>);
    expect(screen.getByText(randomText)).toBeInTheDocument();
  });
});
