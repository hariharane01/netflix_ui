import React, { useState } from "react";
import "./listItem.scss";
import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://occ-0-3364-3662.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbbnPBzT3zZtfTzWKlqSJ7iEXLLzoQvZAXj-5hpYgj9K4N5C2i5io-GeOlVse1uuQb_ii23-5o2v2PulPT7ZRQfSk1KCC-Xd0r5F0peWJeSwNarrYTCreDTWgskLYX4zvrJU8qfsrU6rIFZlGXUnaq1traIxbvFk9CzJDNCEC5aQj0HCyyRF6s-5CfWRZTymQWDpRKIvfFXdCMEVI7SL9tltsmjWKaJisivbN54i4PI5ymvsyT7H3dMMvtU5lipaZ6Zc_QnHiKrOmqSXyIS4Cd90uwBtmRWfPxN0reBazsPCJrwjbotQyrF2L2nimkoXUjdDAX1TnZbwtkERaVF5muu3Jw0W3DV3XedD-I7m7Ut7z-rPRt0.jpg?r=0f5"
        alt="movie name "
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins </span>
              <span className="limit">+13</span>
              <span>1999</span>
            </div>
            <div className="desc">
              A young boy known as the Avatar must master the four elemental
              powers to save a world at war — and fight a ruthless enemy bent on
              stopping him.
            </div>
            <div className="genre">Action </div>
          </div>
        </>
      )}
    </div>
  );
}
