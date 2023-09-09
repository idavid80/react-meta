import chef from "../../icons_assets/restaurant chef B.jpg";
import "./Restaurant.css";

const Restaurant = () => {
  return (
    <div className="restaurant">
      <h1>Little Lemon</h1>

      <img src={chef} className="image" alt="Chicago"></img>

      <p>Description about our chef and Chicago restaurant</p>

      <a href="./">
        <button className="restaurant-button" aria-label="home page">
          back
        </button>{" "}
      </a>
    </div>
  );
};

export default Restaurant;
