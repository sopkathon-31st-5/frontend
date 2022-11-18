import Router from './core/router';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import { theme, mixins } from './styles/theme';
function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={{}}>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
