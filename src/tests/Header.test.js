import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header';
import renderWithRR from './helpers/renderWithRR';

describe('Header component', () => {
  test('Logo is displayed', () => {
    renderWithRR(<Header />);
    const logo = screen.getByText('biewwl');
    expect(logo).toBeInTheDocument();
  });
  test('Links button is displayed', () => {
    renderWithRR(<Header />);
    const linksButton = screen.getByTestId('socialMenu');
    expect(linksButton).toBeInTheDocument();
  });
  test('Home link is displayed', () => {
    renderWithRR(<Header />);
    const homeLink = screen.getByRole('link', { name: 'Home' });
    expect(homeLink).toBeInTheDocument();
  });
  test('About link is displayed', () => {
    renderWithRR(<Header />);
    const aboutLink = screen.getByRole('link', { name: 'About' });
    expect(aboutLink).toBeInTheDocument();
  });
  test('Projects link is displayed', () => {
    renderWithRR(<Header />);
    const projectsLink = screen.getByRole('link', { name: 'Projects' });
    expect(projectsLink).toBeInTheDocument();
  });
  test('Theme link is displayed', () => {
    renderWithRR(<Header />);
    const themeButton = screen.getByTestId('dark-theme');
    expect(themeButton).toBeInTheDocument();
  });
  test('Color button is displayed', () => {
    renderWithRR(<Header />);
    const colorButton = screen.getByTestId('colorsMenu');
    expect(colorButton).toBeInTheDocument();
  });
})
