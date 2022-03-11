import { render } from 'helpers/test-utils';
import { screen, fireEvent } from '@testing-library/react';
import { Image } from 'redux/slices/api/api.types';
import Carousel from './Carousel';

const imagesMock: Image[] = [
  { url: 'test', alt: 'Alt in image object' },
  { url: 'test2' }, // should get automatic alt hotel image - 2
  { url: 'test', alt: 'some alt' },
];

describe('Carousel Component', () => {
  it('Adds alt attribute if not provided', () => {
    render(<Carousel images={imagesMock} />);

    expect(screen.getByAltText(imagesMock[0].alt || '')).toBeInTheDocument();
    expect(screen.getByAltText('hotel image - 2')).toBeInTheDocument();
  });

  it('shows next slide', () => {
    render(<Carousel images={imagesMock} />);

    const buttons = screen.getAllByRole('button');

    fireEvent.click(buttons[1]);
    const slides = screen.getAllByRole('img');

    expect(slides[0]).toHaveStyle('opacity: 0');
    expect(slides[1]).toHaveStyle('opacity: 100%');
  });

  it('shows previous slide', () => {
    render(<Carousel images={imagesMock} />);

    const [prevButton, nextButton] = screen.getAllByRole('button');

    fireEvent.click(nextButton);
    fireEvent.click(prevButton);

    const slides = screen.getAllByRole('img');

    expect(slides[0]).toHaveStyle('opacity: 100%');
  });

  it('shows first slide when moved out of images rage', () => {
    render(<Carousel images={imagesMock} />);

    const buttons = screen.getAllByRole('button');

    fireEvent.click(buttons[0]); // show 2nd slide
    fireEvent.click(buttons[0]); // show 3rd slide
    fireEvent.click(buttons[0]); // show 1st again

    const slides = screen.getAllByRole('img');

    expect(slides[0]).toHaveStyle('opacity: 100%');
  });

  it('shows last slide when moved out of images rage', () => {
    render(<Carousel images={imagesMock} />);

    const [prevButton] = screen.getAllByRole('button');

    fireEvent.click(prevButton); // show 3rd slide

    const slides = screen.getAllByRole('img');

    expect(slides[2]).toHaveStyle('opacity: 100%');
  });
});
