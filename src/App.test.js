import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import renderWithRouter from './helpers/renderWithRouter';

describe('Testa o componente Home', () => {
  test('O pathname "/" renderiza a página Home', () => {
    const { history: { location: { pathname } } } = renderWithRouter(<App />);
    expect(pathname).toBe('/');
    const homeTitle = screen.getByRole('heading', {name: 'Portifólio biewwl', level: 1});
    expect(homeTitle).toBeInTheDocument();
  })
  test('A página Home renderiza o menu de navegação', () => {
    renderWithRouter(<App />);
    const nav = screen.getByTestId('nav');
    expect(nav).toBeInTheDocument();
  })
  test('O botão about no menu de navegação do Home leva ao pathname "/about"', () => {
    const { history } = renderWithRouter(<App />);
    const buttons = screen.getAllByRole('link');
    userEvent.click(buttons[1]);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/about');
  })
  test('O botão projects no menu de navegação do Home leva ao pathname "/projects"', () => {
    const { history } = renderWithRouter(<App />);
    const buttons = screen.getAllByRole('link');
    userEvent.click(buttons[2]);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/projects');
  })
})
