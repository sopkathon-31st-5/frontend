import Router from './core/router';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import { theme, mixins } from './styles/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';

function App() {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <ThemeProvider theme={{}}>
          <QueryClientProvider client={queryClient}>
            <Router />
          </QueryClientProvider>
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
