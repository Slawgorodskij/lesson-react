import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import '@testing-library/jest-dom';

describe('Button', () => {
  it('render component', () => {
    render(<Button label={'TEST'} />);
    //screen.debug();
  });

  // it('render witch snapshot', () => {
  //     const {asFragment} = render(<Button label={'TEST'}/>)
  //
  //     expect(asFragment()).toMatchSnapshot()
  // })

  it('render component witch test', () => {
    render(<Button label={'TEST'} />);

    expect(screen.getByText(/TEST/)).toBeInTheDocument();
  });

  it('render multiply component', () => {
    render(
      <>
        <Button label={'кнопка № 1'} />
        <Button label={'кнопка № 2'} />
      </>
    );

    expect(screen.queryAllByRole('button').length).toBe(2);
  });

  it('button is disabled', () => {
    render(<Button label={'TEST'} disabled />);

    expect(screen.getByTestId('button')).toBeDisabled();
  });
});
