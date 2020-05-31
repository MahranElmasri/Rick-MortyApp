import Character from "./Character";
import React from "react";
import "./CharacterList.css";
import PropTypes from "prop-types";

export default function CharacterList({ character, loading }) {
  return (
    <div className="grid-4">
      {character.map((char) => {
        return <Character key={char.id} char={char} loading={loading} />;
      })}
    </div>
  );
}

CharacterList.propTypes = {
  charactar: PropTypes.object,
  loading: PropTypes.bool.isRequired,
};
