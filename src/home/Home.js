import { Navbar } from "../components/navbar/Navbar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <img
        src="https://img.freepik.com/premium-photo/vintage-grunge-pattern-decoration-wall-floor_1258-29216.jpg"
        alt="bg"
        width="100%"
      />
    </div>
  );
};

export default Home;
