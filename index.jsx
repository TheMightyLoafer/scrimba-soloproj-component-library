import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Badges from "./Badges"
import Badge from "./components/badge/Badge"
import Banner from "./components/banner/Banner"
import Card from "./components/card/Card"
import Testomonial from "./components/testomonial/Testomonial"

function App() {
  return (
    <>
      <Testomonial></Testomonial>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
