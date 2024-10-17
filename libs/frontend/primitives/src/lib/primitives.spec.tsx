import { render } from '@testing-library/react';

import Primitives from './primitives';

describe('Primitives', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Primitives />);
    expect(baseElement).toBeTruthy();
  });
});
