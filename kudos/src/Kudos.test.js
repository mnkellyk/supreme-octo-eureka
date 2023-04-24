import { render, screen } from '@testing-library/react';
import Kudos from './Kudos';

test('renders learn react link', () => {
  render(<Kudos />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
