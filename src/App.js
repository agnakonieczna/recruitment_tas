import GlobalStyle from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      Hello
    </ThemeProvider>
  );
}

export default App;
