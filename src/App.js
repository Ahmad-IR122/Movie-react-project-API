import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import movieOne from "./Images/movieOne.png";
import movieTwo from "./Images/movieTwo.png";
import movieThree from "./Images/movieTree.png";
import movieFour from "./Images/movieFour.png";
import Card from "./Components/Card";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="d-flex justify-content-start p-3 m-3">
        <h1>Popular Movies</h1>
      </div>
      <div className="container">
        <div className="row g-4">
          <Card image={movieOne} />
          <Card image={movieTwo} />
          <Card image={movieThree} />
          <Card image={movieFour} />
        </div>
      </div>
    </div>
  );
}

export default App;
