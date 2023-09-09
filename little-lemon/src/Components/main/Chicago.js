import "./Chicago.css";
import imageA from "../../icons_assets/Mario and Adrian A.jpg";
import imageB from "../../icons_assets/Mario and Adrian b.jpg";

export default function Chicago() {


function showMore(){

}
  return (
    <div id="about" className="chicago-section">
      <div className="chicago-text">
        <h1>Little Lemon</h1>
        <article className="chicago-description">
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurat, focused on
            traditional recipes served with a modern twist. Meditwist Family
            Restaurant is a beloved family-owned establishment that specializes
            in serving Mediterranean cuisine with a contemporary twist. Located
            in a bustling city, Meditwist provides a unique dining experience by
            infusing traditional recipes with modern techniques and flavors. To
            ensure the authenticity of our Mediterranean dishes, we carefully
            selected ingredients and perfected cooking techniques in each
            recipe. To ensure that our restaurant met the high standards
            necessary for offering authentic Mediterranean cuisine, we underwent
            a rigorous verification process.
          </p>
        </article>
        <a href="./restaurant">
          {" "}
          <button className="chicago-button" aria-label="chicago restaurant" onClick={showMore}>
            Show more
          </button>{" "}
        </a>
      </div>
      <div className="chicago-image">
        <img src={imageA} className="chef" alt="Mario and Adrian"></img>
        <img src={imageB} className="chef2" alt="Mario and Adrian"></img>
      </div>
    </div>
  );
}
