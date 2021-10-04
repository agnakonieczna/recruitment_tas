import { useState, useEffect } from 'react';
import GlobalStyle from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import HouseList from './pages/HouseList/HouseList';
import SingleHouse from './pages/SingleHouse/SingleHouse';
import HouseForm from './pages/HouseForm/HouseForm';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://mobile-reality-backend.sadek.usermd.net/houses/all')
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.error);
        }
        return res;
      })
      .then((data) => setData(data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/house-list'>
          <HouseList data={data} setData={setData} />
        </Route>
        <Route path='/single-house/:id'>
          <SingleHouse />
        </Route>
        <Route path='/house-form'>
          <HouseForm houseData={data} setData={setData} />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
