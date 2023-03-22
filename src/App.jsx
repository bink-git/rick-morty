import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Logo from './components/Logo';
import Cards from './components/Cards';
import Search from './components/Search';

function App() {
  const [chars, setChars] = useState([]);
  const [search, setSearch] = useState('');
  console.log(chars);

  let api = `https://rickandmortyapi.com/api/character/?page=1&name=${search}`;

  useEffect(() => {
    axios.get(api).then((res) => {
      setChars(res.data.results);
    });
  }, [api]);

  return (
    <>
      <Logo />
      <Search setSearch={setSearch} />
      <Cards chars={chars} />
    </>
  );
}

export default App;
