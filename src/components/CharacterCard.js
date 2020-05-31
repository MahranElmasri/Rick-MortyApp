import React, { useEffect, useState } from "react";
import "./CharacterCard.css";
import episodeList from "../helper/EpisodeList";
import fetchChar from "../service/fetchChar";
import PropTypes from "prop-types";

export default function CharacterCard(props) {
  const [character, setCharacter] = useState({ results: [] });
  const regex = /\d+/g;
  const id = props.match.params.id;

  useEffect(() => {
    const getChar = async () => {
      const res = await fetchChar(id);
      setCharacter(res.data);
    };
    getChar();
  }, [id]);

  const { image, name, status, episode = [], gender, species } = character;

  return (
    <div className="container ">
      <div className="center table">
        <table>
          <tbody>
            <tr>
              <td className="name" colSpan="2">
                <h2>{name}</h2>
              </td>
            </tr>
            <tr>
              <td className="char-img" colSpan="2">
                <img className={"character-img"} src={image} alt="loading.." />
              </td>
            </tr>
            <tr>
              <td className="text-primary status ">Status:</td>
              <td>{status}</td>
            </tr>
            <tr>
              <td className="text-primary gender">Gender:</td>
              <td>{gender}</td>
            </tr>
            <tr>
              <td className="text-primary species">Species:</td>
              <td>{species}</td>
            </tr>
          </tbody>
        </table>
        <br />
        <h2> Episode Table</h2>
        <table className="episode-table">
          <thead>
            <tr className="eps-header">
              <th className="text-primary first-th">#</th>
              <th className="text-primary second-th">Episode name</th>
              <th className="text-primary third-th">On Air</th>
            </tr>
          </thead>

          <tbody>
            {episode.map((item) => {
              return (
                <tr className="eps-result" key={item}>
                  <td className="eps-id">
                    {episodeList[item.match(regex).join("")].id}
                  </td>
                  <td className="eps-name">
                    {episodeList[item.match(regex).join("")].name}
                  </td>
                  <td className="eps-onAir">
                    {episodeList[item.match(regex).join("")].airOn}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

CharacterCard.propTypes = {
  id: PropTypes.number,
};
