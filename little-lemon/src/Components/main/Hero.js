import "./Hero.css";
import image from "../../icons_assets/restauranfood.jpg";

export default function Hero() {
  return (
    <div id="home" className="hero-section">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <article className="hero-description">
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurat, focused on
            traditional recipes served with a modern twist.
          </p>
        </article>
        <a href="./booking"> <button className="chicago-button" aria-label="reserve">Reserve a table</button> </a>
      </div>
      <div className="hero-image">
        <img src={image} className="restaurant-food" alt="restauran food"></img>
      </div>
    </div>
  );
}
