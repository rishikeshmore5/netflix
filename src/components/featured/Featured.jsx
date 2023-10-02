import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import "./featured.scss";
import { movies } from "../../data";
import { Link } from "react-router-dom";

export default function Featured({ type, setGenre }) {
  const [content, setContent] = useState({});
  const [rand, setRand] = useState(0);

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        var randTemp = Math.random() * movies.length;
        var randFloored = Math.trunc(randTemp);
        setRand(randFloored);
        console.log(randFloored);
        // const res = await axios.get(`/movies/random?type=${type}`, {
        //   headers: {
        //     token:
        //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjVmMThmMWUyOTc2MzI3OGQzZTk1YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NDUyNjIxMSwiZXhwIjoxNjk0OTU4MjExfQ.yqWH_PGqUIg-3k898asNREKJzw6aSFZHaWWNuHVzWBg",
        //   },
        // });
        setContent(movies[randFloored]);
        // setContent(movies[39]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);

  // console.log(content);
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>
            {type === "movies"
              ? "Movies"
              : "" || type === "series"
              ? "Series"
              : "" || type === "Genre"
              ? ""
              : ""}
          </span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>Genre</option>
            {/* <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option> */}
            <option value="sci-fi">Sci-fi</option>
            {/* <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option> */}
            <option value="superhero">Superhero</option>
          </select>
        </div>
      )}
      <img src={content.img} alt="" />
      <div className="info">
        <img src={content.imgTitle} alt="" />
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <Link
            to={{ pathname: `/watch/${content.id}`, movie: content }}
            className="link"
          >
            <button className="play">
              <PlayArrow />
              <span>Play</span>
            </button>
          </Link>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
