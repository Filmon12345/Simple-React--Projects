import Accordian from "./components/accordian";
import "./App.css";
import RandomColor from "./components/random-color";
import StarRating from "./components/Star-rating";
function App() {
  return (
    <>
      <h3>PROJECT 1: ACCORDIAN</h3>
      <Accordian />

      <h3>PROJECT 2: RANDOM COLOR GENERATOR</h3>
      <RandomColor />

      <h3>PROJECT 3: STAR RATING</h3>
      <StarRating noOfStars={10} />
    </>
  );
}

export default App;
