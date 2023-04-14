import { render, screen } from '@testing-library/react';

import { Band } from '@/components/Elements/Band';

describe('components/Elements/Band', () => {
  test('Text', () => {
    const randomText = (Math.random() + 1).toString(36).substring(7);

    render(<Band>{ randomText }</Band>);
    expect(screen.getByText(randomText)).toBeInTheDocument();
  });
});
