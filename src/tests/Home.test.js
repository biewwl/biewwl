import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../routes/Home';
import renderWithRR from './helpers/renderWithRR';

describe('Home component', () => {
  test('Pathname / render Home', () => {
    const { history: { location: { pathname } } } = renderWithRR(<Home />);
    expect(pathname).toBe('/');
    const homeTitle = screen.getByRole('heading', {name: 'Gabriel Dias', level: 1});
    expect(homeTitle).toBeInTheDocument();
  });
  test('Introduction is displayed', () => {
    renderWithRR(<Home />);
    const iAm = screen.getByText('I am');
    const title = screen.getByRole('heading', { name: 'Gabriel Dias', level: 1 });
    const webDeveloper = screen.getByText('Web Developer');
    expect(iAm).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(webDeveloper).toBeInTheDocument();
  });
  test('Introduction projects button is displayed', () => {
    renderWithRR(<Home />);
    const projectsButton = screen.getAllByRole('link', { name: 'Projects' });
    expect(projectsButton).toHaveLength(2);
  });
  test('Introduction image is displayed', () => {
    renderWithRR(<Home />);
    const home = screen.getByTestId('homeImage');
    expect(home).toBeInTheDocument();
  });
})
