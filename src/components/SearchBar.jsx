import React, { useState, useEffect } from 'react'

import {
  API_URL,
  SITE,
  SEARCH_PARAM
} from '../constants/ApiParams'

// import AppData from '../constants/AppData';

const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleOnChangeEvent = event => {
    setSearchTerm(event.target.value.toLowerCase());
  }

  useEffect(() => {
    console.log("llamada  a useEffect" + searchTerm);
    fetch(API_URL + SITE + SEARCH_PARAM + searchTerm)
      .then(res => res.json())
      .then(
        (result) => {
          const Array = [];
          result.results.map((hit) => Array.push(
            {
              link: hit.permalink,
              title: hit.title,
              price: hit.price
            }))
          setResults(Array);
          console.log(results);
        },
        (error) => {
          console.log(error);
        }
      )
  }, [searchTerm]);

  return (
    <div className="container py-5 text-white">
      <h1>{searchTerm}</h1>
      <div className="box">
        <i className="fas fa-search mx-2"></i>
        <input
          onChange={handleOnChangeEvent}
          type="text"
          value={searchTerm}
          placeholder="Custom searchbar"
        />
        <i className="far fa-times-circle"></i>
      </div>
      <div className="results">
        {results.map(result => (
          <ul>
            <li>
              <div className="col-lg-12 pt-4">
                <a href={result.link} target="_black">
                  <div className="content-search">
                    <div className="content">
                      <h6>{result.title}</h6>
                    </div>
                    <div className="content">
                      <h6>Precio: ${result.price} ARS</h6>
                    </div>
                  </div>
                </a>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;