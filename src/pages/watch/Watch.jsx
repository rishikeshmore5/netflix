import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { movies } from "../../data.js";

import "./watch.scss";

export default function Watch() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  // const movie = location;
  // console.log(id);

  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = () => {
      try {
        // const res = await axios.get("/movies/find/" + id, {
        //   headers: {
        //     token:
        //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjVmMThmMWUyOTc2MzI3OGQzZTk1YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NDM2MTk1NCwiZXhwIjoxNjk0NzkzOTU0fQ.cT_UunaJOUwkz5wUhsrq3xXrI7_Qh2TD3VuhLhC9_-k",
        //     // "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        //   },
        // });
        for (let i = 0; i < movies.length; i++) {
          if (movies[i].id == id) {
            var item2 = movies[i];

            setMovie(item2);
            console.log(item2);
          }
        }
        // setMovie(res.data);
        // console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  });
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video className="video" autoPlay progress controls src={movie.video} />
    </div>
  );
}
