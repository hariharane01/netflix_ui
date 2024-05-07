import { useEffect, useState } from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import { Navbar } from "../../components/navbar/Navbar";
import "./home.scss";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZmMxMGYyNmVhYWJkNjFhMzQ0N2Q5ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxNTA2MjMxMSwiZXhwIjoxNzE1NDk0MzExfQ.-KZrSyQt_CSAebRItkNAjLGJS5YPY3EhWTmIPvIGBb0",
            },
          }
        );
        // console.log(res.data);
        setLists(res.data);
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
      {lists.map((list,index) => (
        <List list={list} key={index} />
      ))}
    </div>
  );
};

export default Home;
