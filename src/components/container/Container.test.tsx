import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Container from './Container';

describe('<Container />', () => {
  test('must render correctly', () => {
    const { container } = render(
      <Container>
        <h1>Container</h1>
      </Container>,
    );

    expect(
      screen.getByRole('heading', {
        name: /container/i,
      }),
    ).toBeDefined();
    expect(screen.getByRole('heading')).toBeDefined();

    expect(container).toMatchSnapshot();
  });
});
