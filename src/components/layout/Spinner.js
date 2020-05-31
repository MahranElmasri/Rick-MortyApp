import "./Spinner.css";
import React from "react";
import spinner from "./spinner.gif";

export default function Spinner() {
  return (
    <div data-testid="spinner-test" className="spinner">
      <img data-testid="img" src={spinner} alt="Loading" />
    </div>
  );
}
