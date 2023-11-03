import React from "react";
import "./HomePage.css";
import Product from "./Product";

function HomePage() {
  return (
    <div>
      <div className="home">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61ORmyXnK4L._SX3000_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            key="111"
            id="111"
            title="The Learn Startup: How Constant Innovation Creates Rapidly Successful Business Paperback"
            price={1.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            key="222"
            id="222"
            title="How Constant Innovation Creates Rapidly Successful Business Paperback"
            price={21.96}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            key="333"
            id="33"
            title="Innovation Creates Rapidly Successful Business Paperback"
            price={31.96}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            key="44"
            id="444"
            title="The Learn Startup"
            price={41.96}
            rating={2}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            key="55"
            id="555"
            title="Creates Rapidly Successful Business Paperback"
            price={51.96}
            rating={1}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            key="66"
            id="666"
            title="The Learn Startup: How Constant Innovation Creates Rapidly Successful Business Paperback"
            price={61.96}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
