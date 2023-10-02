import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
import { useEffect, useState } from "react";
import axios from "axios";
// import { useLocation } from "react-router-dom";
import { listdata } from "../../data.js";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  // const location = useLocation();
  // var pathAT = location.pathname.split("/")[1];
  // console.log(pathAT);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        // console.log(genre);
        // const res = await axios.get(
        //   `lists${type ? "?type=" + type : ""}${
        //     genre ? "&genre=" + genre : ""
        //   }`,
        //   {
        //     headers: {
        //       token:
        //         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjVmMThmMWUyOTc2MzI3OGQzZTk1YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NDUyNjIxMSwiZXhwIjoxNjk0OTU4MjExfQ.yqWH_PGqUIg-3k898asNREKJzw6aSFZHaWWNuHVzWBg",
        //       // "Bearer " +
        //       // JSON.parse(localStorage.getItem("user")).accessToken,
        //     },
        //   }
        // );
        // console.log(listdata);
        // for (let i = 0; i < listdata.length; i++) {
        //   if (listdata.genre == genre) {
        //   }
        // }
        var list2 = [];
        var Listmain = [];

        for (let i = 0; i < listdata.length; i++) {
          // console.log(genre);
          if (listdata[i].genre == genre) {
            Listmain.push(listdata[i]);
          } else if (genre == null || genre == "Genre") {
            Listmain = listdata;
            setLists(listdata);
          }
        }

        for (let i = 0; i < Listmain.length; i++) {
          // console.log(genre);

          if (type == "movies") {
            console.log(type);
            if (Listmain[i].type == "movie") {
              list2.push(Listmain[i]);
              console.log(list2);
              setLists(list2);
            }
          } else if (type == "series") {
            console.log(type);
            if (Listmain[i].type == "series") {
              console.log(Listmain[i]);

              list2.push(Listmain[i]);
              console.log(list2);
              setLists(list2);
            }
          } else {
            console.log();
            setLists(Listmain);
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
};

export default Home;
