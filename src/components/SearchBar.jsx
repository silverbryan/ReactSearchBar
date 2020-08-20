import React, { useState, useEffect } from 'react'

import {
  API_URL,
  SITE,
  SEARCH_PARAM
} from '../constants/ApiParams'

import AppData from '../constants/AppData';

const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [visible, setVisible] = useState(false);
  const [results, setResults] = useState([]);

  const handleOnChangeEvent = (event) => {
    setSearchTerm(event.target.value);
  }

  const getResults = (searchTerm) => {
    fetch(API_URL + SITE + SEARCH_PARAM + searchTerm)
      .then(res => res.json())
      .then(
        (result) => {
          const Array = [];
          result.results.map((hit) => Array.push(
            {
              image: hit.thumbnail,
              title: hit.title
            }))
          setResults(Array);
        },
        (error) => {
          setVisible(false);
        }
      )
  }

  const getProductById = () => {

  }

  useEffect(() => {
    if (searchTerm !== "") {
      setVisible(true);
      getResults(searchTerm);
    } else {
      setVisible(false);
    }
  })

  return (
    <div className="container py-5 text-white">
      <div className="box">
        <i class="fas fa-search"></i>
        <input onKeyPress={handleOnChangeEvent} type="text" name="input" id="" placeholder="Custom searchbar" />
        <i class="far fa-times-circle"></i>
      </div>
      {visible
        ?
        <div className="results">
          {results.map(result => (
            <ul>
              <li>
                <span>{result.title}</span>
              </li>
            </ul>
          ))}
        </div>
        :
        <p>No result found</p>
      }
    </div>
  );
}

export default SearchBar;