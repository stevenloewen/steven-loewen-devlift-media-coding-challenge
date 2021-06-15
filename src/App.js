import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
      primary: {
          main: '#607D3B'
      }
  },
  shadows: ['none'],
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 768,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: 'Poppins',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,

  }
  
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path = "/" exact component = {HomePage} />         
        </Switch>
      </BrowserRouter>      
    </ThemeProvider>
  );
}

export default App;
