import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './components/AppRouter'
import ShopNavBar from "./components/ShopNavBar";
function App() {
  return (
    <BrowserRouter>
        <ShopNavBar />
        <AppRouter />
    </BrowserRouter>
  );
}

export default App;
