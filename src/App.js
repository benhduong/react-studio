import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  return (
    <div className="App">
      <div>
        <h1>Ben's Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
        <div className="menu">
          {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
            <BakeryItem name={item.name} desc={item.description} price={item.price} image={item.image} cart={cart} setCart={setCart} total={total} setTotal={setTotal}/> // replace with BakeryItem component    
           ))}
        </div>
      </div>
      
      <div className="cart">
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
        <p>{cart}</p>
        <h1>Total: ${total}</h1>
      </div>
    </div>
  );
}

export default App;
