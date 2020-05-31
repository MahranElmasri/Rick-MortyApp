import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import CharacterCard from "./components/CharacterCard";
import CharacterList from "./components/CharacterList";
import Navbar from "./components/layout/Navbar";
import Dropdown from "./components/Dropdown";
import fetchCharacters from "./service/fetchCharacters";
import Spinner from "./components/layout/Spinner";
import Search from "./components/Search";
import axios from "axios";

const App = () => {
  const [result, setResult] = useState({ results: [] });
  let [loading, setLoading] = useState(false);
  let { prev, next, pages } = result.info || {};
  const [currentPage] = useState(1);
  const [charPerPage] = useState(15);
  const statusOptions = ["Alive", "Dead", "Unknown"];
  const speciesOptions = [
    "Human",
    "Alien",
    "Mytholog",
    "Poopybutthole",
    "Humanoid",
    "Parasite",
  ];

  const onSelect = async (searchquery, filter) => {
    let species = speciesOptions.filter((item) => item === searchquery);
    let status = statusOptions.filter((item) => item === searchquery);
    setLoading(true);
    setResult({ results: [] });
    const res = await fetchCharacters(status, species);
    setResult(res);
    setLoading(false);
  };

  const onSearch = async (searchquery) => {
    setLoading(true);
    setResult({ results: [] });
    const res = await axios(
      `https://rickandmortyapi.com/api/character/?name=${searchquery}`
    );
    setResult(res.data);
    setLoading(false);
  };

  const movePage = async (page) => {
    setLoading(true);
    const res = await axios(page);
    setResult(res.data);
    setLoading(false);
  };

  useEffect(() => {
    onSelect();
  }, []);

  next = next ? next : pages;
  prev = prev ? prev : 1;

  const indexOfLastPost = currentPage * charPerPage;
  const indexOfFirstPost = indexOfLastPost - charPerPage;
  const currntResult = result.results.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <Router className="App">
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <div className="container center">
                <Dropdown
                  onSelect={onSelect}
                  placeholder="Filter by status"
                  options={statusOptions}
                  filter="status"
                />
                <Dropdown
                  onSelect={onSelect}
                  placeholder="Filter by species"
                  options={speciesOptions}
                  filter="species"
                />
                <Search onSearch={onSearch} />
                {loading && <Spinner />}
                <CharacterList character={currntResult} loading={loading} />
                {pages > 1 ? (
                  <div>
                    <button
                      disabled={prev === 1}
                      onClick={() => {
                        movePage(prev);
                      }}
                      className="btn prev-btn btn-sm "
                    >
                      {`<<Prev Page`}
                    </button>
                    <button
                      disabled={next === pages}
                      onClick={() => {
                        return movePage(next);
                      }}
                      className="btn next-btn btn-sm "
                    >
                      {`Next Page>>`}
                    </button>
                  </div>
                ) : null}
              </div>
            );
          }}
        />
        <Route exact path="/details/:id" component={CharacterCard} />
      </Switch>
    </Router>
  );
};
export default App;
