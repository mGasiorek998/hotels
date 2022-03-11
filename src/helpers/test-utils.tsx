/* eslint-disable */
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import filtersReducer from '../redux/slices/filters/filtersSlice';
import menuReducer from '../redux/slices/menu/menuSlice';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';

function render(
  ui: React.ReactElement,
  {
    //@ts-ignore
    preloadedState,
    store = configureStore({
      reducer: { filters: filtersReducer, menu: menuReducer },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }: { children: JSX.Element }) {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>{children}</Provider>
      </ThemeProvider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
