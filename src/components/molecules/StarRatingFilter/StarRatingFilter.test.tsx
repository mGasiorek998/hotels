import { screen, fireEvent } from '@testing-library/react';
import { render } from 'helpers/test-utils';
import StarRatingFilter from './StarRatingFilter';

describe('Star Rating Filter Component', () => {
  it('renders with only empty stars icons', () => {
    render(<StarRatingFilter />);
    const stars = screen.getAllByTestId('starOutlined');

    expect(stars).toHaveLength(5);
  });

  it('renders correct amount of filled stars', () => {
    render(<StarRatingFilter />);

    const stars = screen.getAllByRole('button');

    fireEvent.click(stars[3]);

    const starsFilled = screen.getAllByTestId('starFilled');

    expect(starsFilled).toHaveLength(4);
  });

  it('clears stars when the same star was clicked twice', () => {
    render(<StarRatingFilter />);

    const stars = screen.getAllByRole('button');

    fireEvent.click(stars[3]);
    fireEvent.click(stars[3]);

    const emptyStars = screen.getAllByTestId('starOutlined');

    expect(emptyStars).toHaveLength(5);
  });
});
