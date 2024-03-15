import { Info, PlayArrow } from "@mui/icons-material";
import "./featured.scss";
export default function Featured() {
  return (
    <div className="featured">
      <img
        src="https://img.onmanorama.com/content/dam/mm/en/entertainment/movie-reviews/images/2023/10/18/leo-poster.jpg"
        alt="Leo"
      />
      <div className="info">
        <img
          alt="title"
          src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABXpKM4gAhvx_44YoVT4n5F_2siLD3SoOv31x1FGa8d_SQtPx--elnbqkxTwaIW5IuepR3t4U_rcukcEa70sC_ZCz2mdWK0wW4wfz6xOyJydf.png?r=7f6"
        />
        <span className="description">
          Parthiban is a mild-mannered cafe owner in Kashmir, who fends off a
          gang of murderous thugs and gains attention from a drug cartel
          claiming he was once a part of them.
        </span>
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
