import "./Specials.css";
import greekSalad from "../../icons_assets/greek salad.jpg";
import bruchetta from "../../icons_assets/bruchetta.svg";
import lemonDessert from "../../icons_assets/lemon dessert.jpg";

// https://www.coursera.org/learn/meta-front-end-developer-capstone/supplement/l4HnE/exercise-applying-design-fundamentals-in-figma

export default function Specials() {
  // API error 404. new data as specials
  const specials = [
    {
      title: "Greek salad",
      descriptions:
        "The famous greeek salad of crispy lettuce, peppers, olives and our Chicago style feta chesse, garnished with crunchy garlic and rosemary croutons",
      prices: 12.99,
      picture: greekSalad,
    },
    {
      title: "Bruchetta",
      descriptions:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned  with salt and olive oil",
      prices: 5.99,
      picture: bruchetta,
    },
    {
      title: "Lemon dessert",
      descriptions:
        "Our Lemon dessert is made from grilled bread that has been smeared with garlic and seasoned  with salt and olive oil",
      prices: 5.0,
      picture: lemonDessert,
    },
  ];


  return (
    <main id="menu" className="Main">
      <div className="card-title">
        <h1>This week specials!</h1>
        <button>Online Menu</button>
      </div>
      <div className="card">
        {specials.map((special, i) => (
          <div key={i} className="card-special">
            <img
              className="specials-menu"
              src={special.picture}
              alt={special.title}
            ></img>
            <article className="card-menu">
              <h3 className="card-title">
                {special.title} {special.prices}
              </h3>
              <p>{special.descriptions}</p>
              <h3>Order a delivery {}</h3>
            </article>
          </div>
        ))}
      </div>
    </main>
  );
}
