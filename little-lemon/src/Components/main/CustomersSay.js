import "./CustomersSay.css";
// import star from "../images/star.jpg";
import {AiFillStar } from "react-icons/ai";
import carmen from "../../images/carmen";
// import paul from "../images/paul";
import chan from "../../images/chan";
import jane from "../../images/jane";

function StarRating(point) {
  return (
    <span>
      {Array(5)
        .fill()
        .map((_, index) => (
          <AiFillStar 
          className={ (point > index)? "stars-icon" : ""}
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
      commment:
        "I lovely little restaurant",
      puntuation: 4,
      picture: carmen,
    }, 
    {
      name: "Chan",
      commment:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned  with salt and olive oil",
        puntuation: 5,
      picture: chan,
    },
    {
      name: "Jane",
      commment:
        "Our Lemon dessert is made from grilled bread that has been smeared with garlic and seasoned  with salt and olive oil",
        puntuation: 3,
      picture: jane,
    },
  ];



  return (
    <main id="main" className="customers-section">
      <div className="card-title">
        <h1>This week specials!</h1>
        <button>Online Menu</button>
      </div>
      <div className="card">
        {customers.map((customer, i) => (
          <div key={i} className="card-special">
            <img
              className="specials-menu"
              src={customer.picture}
              alt={customer.name}
            ></img>
            <article className="card-menu">
              <h3 className="card-title">
                {customer.name}
              </h3>
                 <p>{customer.commment}</p>
              <h3>{StarRating(customer.puntuation)}</h3>
            </article>
          </div>
        ))}
      </div>
    </main>
  );
}


export default CustomersSay;