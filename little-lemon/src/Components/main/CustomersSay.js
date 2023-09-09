import "./CustomersSay.css";
// import star from "../images/star.jpg";
import { AiFillStar } from "react-icons/ai";
import carmen from "../../images/carmen";
import paul from "../../images/paul";
import chan from "../../images/chan";
import jane from "../../images/jane";

function feedback(point) {
  return (
    <span>
      {Array(5)
        .fill()
        .map((_, index) => (
          <AiFillStar
            className={point > index ? "stars-icon" : ""}
            key={index}
          />
        ))}
    </span>
  );
}

const CustomersSay = () => {
  const customers = [
    {
      name: "Carmen",
      commment: "I lovely little restaurant",
      rating: 4,
      picture: carmen,
    },
    {
      name: "Chan",
      commment:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned  with salt and olive oil",
      rating: 5,
      picture: chan,
    },
    {
      name: "Jane",
      commment:
        "Our Lemon dessert is made from grilled bread that has been smeared with garlic and seasoned  with salt and olive oil",
      rating: 3,
      picture: jane,
    },
    {
      name: "Paul",
      commment:
        "Great mediterranean restaurant!",
      rating: 4.5,
      picture: paul,
    },
    
  ];

  return (
    <main id="feedback" className="customers-section">
      <div className="customers-title">
        <h1>What our customers say?</h1>

        <a href="./feedback">
          {" "}
          <button className="customers-button" aria-label="reserve">
            Feedback
          </button>{" "}
        </a>
      </div>
      <div className="card">
        {customers.map((customer, i) => (
          <div key={i} className="customer-card">
            <div className="user-title">
              <img
                className="avatar"
                /*               className="customer-image" */
                src={customer.picture}
                alt={customer.name}
              ></img>
              <h3>{customer.name}</h3>
            </div>
            <div className="user-menu">
            <article >
              <p>{customer.commment}</p>

            </article>            </div>
            <div className="rating">
            <h3 >{feedback(customer.rating)}</h3>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default CustomersSay;
