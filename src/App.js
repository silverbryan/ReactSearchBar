import React from "react";

import "./App.css";

import SearchBar from './components/SearchBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="content-app">
      <Navbar />
      <SearchBar />
      <Footer />
    </div>
  );
}

export default App;
