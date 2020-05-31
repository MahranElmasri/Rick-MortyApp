import { Link } from "react-router-dom";
import React from "react";
import Spinner from "./layout/Spinner";
import PropTypes from "prop-types";
import "./Character.css";

export default function Character({ char, loading }) {
  const { id, image, name, gender, species, status, created } = char;
  return (
    <div data-testid="char" className="char">
      <ul className="app">
        <li className=" enter card" key={id}>
          <Link to={`/details/${id}`}>
            {loading ? (
              <Spinner />
            ) : (
              <img className="character-img" src={image} alt="charImage" />
            )}
            <div className="center text-light ">{name}</div>
            <div className="center text-light">{species}</div>
            <div className="center text-light">{gender}</div>
            <div className="center text-light">{created.split("T")[0]}</div>
            <div
              className={
                status === "Dead"
                  ? "badge-danger"
                  : status === "Alive"
                  ? "badge-success"
                  : "badge"
              }
            >
              {status}
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

Character.propTypes = {
  char: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};
