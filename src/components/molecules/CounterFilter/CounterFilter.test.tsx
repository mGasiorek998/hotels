import { screen, fireEvent } from '@testing-library/react';
import { FiltersEnum } from 'redux/slices/filters/filters.types';
import { render } from '../../../helpers/test-utils';
import CounterFilter from './CounterFilter';

describe('Counter Filter Component', () => {
  it('Adds 1 on + button click', () => {
    render(<CounterFilter label="test" filter={FiltersEnum.Adults} />);
    const currentCounter = screen.getByTestId('counter');
    const [addButton] = screen.getAllByRole('button');

    expect(currentCounter).toHaveTextContent('0');

    fireEvent.click(addButton);

    expect(currentCounter).toHaveTextContent('1');
  });

  it('Disables subtract button when value is 0', () => {
    render(<CounterFilter label="test" filter={FiltersEnum.Adults} />);
    const [addButton, subtractButton] = screen.getAllByRole('button');

    expect(subtractButton).toBeDisabled();

    fireEvent.click(addButton); // value > 0

    expect(subtractButton).not.toBeDisabled();
  });

  it('Subtracts 1 when - button is clicked', () => {
    render(<CounterFilter label="test" filter={FiltersEnum.Adults} />);
    const [addButton, subtractButton] = screen.getAllByRole('button');
    const currentCounter = screen.getByTestId('counter');

    expect(subtractButton).toBeDisabled();

    fireEvent.click(addButton); // value > 0
    fireEvent.click(subtractButton); // value = 0

    expect(currentCounter).toHaveTextContent('0');
  });
});
