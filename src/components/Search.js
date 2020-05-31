import React, { useState } from "react";
import "./Search.css";

export default function Search({ onSearch }) {
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onSearch(search);
    setSearch("");
  };

  return (
    <div className="text-right">
      <form className="form" onSubmit={onSubmit}>
        <input
          className="input"
          type="text"
          value={search}
          onChange={onChange}
          name="search"
          placeholder="Search Character..."
        />
        <button type="submit" className="btn search btn-sm btn-success">
          Search
        </button>
      </form>
    </div>
  );
}
