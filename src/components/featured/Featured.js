import { Info, PlayArrow } from "@mui/icons-material";
import "./featured.scss";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Featured({ type }) {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZmMxMGYyNmVhYWJkNjFhMzQ0N2Q5ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMjY0MTU4OSwiZXhwIjoxNzEzMDczNTg5fQ.YX9HE2Ntn2SasR7MDY8g9dAANqUwOO_3_1kZpzQMO3c",
          },
        });
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span> {type === "movies" ? "Movies" : "Series"} </span>
          <select name="genre" id="genre">
            <option>Genre </option>
            <option value="adventure">Adventure </option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src={content.img}
        // src="https://img.onmanorama.com/content/dam/mm/en/entertainment/movie-reviews/images/2023/10/18/leo-poster.jpg"
        alt="Leo"
      />
      <div className="info">
        <img
          alt="title"
          src={content.imageTitle}
          // src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABXpKM4gAhvx_44YoVT4n5F_2siLD3SoOv31x1FGa8d_SQtPx--elnbqkxTwaIW5IuepR3t4U_rcukcEa70sC_ZCz2mdWK0wW4wfz6xOyJydf.png?r=7f6"
        />
        <span className="description">{content.desc}</span>
        <div className="buttton">
          <button className="play">
            <PlayArrow />
            <span>Play </span>
          </button>
          <button className="more">
            <Info />
            <span>Info </span>
          </button>
        </div>
      </div>
    </div>
  );
}
