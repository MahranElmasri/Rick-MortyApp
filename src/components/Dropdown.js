import React, { useState } from "react";
import "./Dropdown.css";
import PropTypes from "prop-types";

export default function Dropdown({ onSelect, options, placeholder, filter }) {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    e.preventDefault();
    // setValue();
    onSelect(e.target.value, filter);
  };

  return (
    <div className="dropdown">
      <select data-testid="dropdown" onChange={onChange}>
        <option value="">{placeholder}</option>
        {options.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
}

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};
