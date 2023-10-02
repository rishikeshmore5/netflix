import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { listadata } from "../../data.js";
import { movies } from "../../data.js";

export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = () => {
      try {
        // const res = await axios.get("/movies/find/" + item, {
        // headers: {
        //   token:
        //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjVmMThmMWUyOTc2MzI3OGQzZTk1YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NDM2MTk1NCwiZXhwIjoxNjk0NzkzOTU0fQ.cT_UunaJOUwkz5wUhsrq3xXrI7_Qh2TD3VuhLhC9_-k",
        //   // "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        // },
        // });
        for (let i = 0; i < movies.length; i++) {
          if (movies[i].id == item) {
            var item2 = movies[i];

            setMovie(item2);
            // console.log(item2);
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);
  // console.log(item2);

  return (
    <Link to={{ pathname: `/watch/${movie.id}`, movie: movie }}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie?.imgSm} alt="" />
        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className="limit">+{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="title">{movie.title}</div>
              <div className="desc">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
