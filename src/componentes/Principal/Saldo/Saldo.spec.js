import { render, screen } from '@testing-library/react';
import Saldo from '.';

describe('Componente <Saldo/>', () => {
  test('Deve rendenizar o saldo com valor monetario', () => {
    render(<Saldo saldo={1000} />);
    const saldo = screen.getByTestId('saldo');
    expect(saldo).toHaveTextContent('R$ 1000');
  });
});
