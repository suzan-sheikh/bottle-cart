import { useEffect, useState } from "react";
import Bottole from "../Bottole/Bottole";
import './Bottles.css'
import Cart from "../Cart/Cart";
import { addToLS, getStoredCart, removeFromLs } from "../../utilities/localstorage";

const Bottoles = () => {

  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    fetch('bottles.json')
    .then(res => res.json())
    .then(data => setBottles(data))
  },[]);

  useEffect(() => {
    console.log('call the useEffect', bottles.length);
    if(bottles.length){
      const storedCart = getStoredCart();
      console.log(storedCart, bottles);
      const savCart = [];
      for(const id of storedCart){
        console.log(id)
        const bottle = bottles.find(bottle => bottle.id === id)
        if(bottle){
          savCart.push(bottle)
        }
      }      
      console.log('saved cart', savCart);
      setCart(savCart);
    }

  },[bottles]);


  const handleAddToCart = bottle => {
    const newCard = [...cart, bottle];
    setCart(newCard);
    addToLS(bottle.id)
  }

  const handleRemoveFromCart = id => {
    const remainingCart = cart.filter(bottle => bottle.id !== id);
    setCart(remainingCart);    
    removeFromLs(id);
    
  }



  return (
    <div>
      <h2>Bottle Available: {bottles.length} </h2>
      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} ></Cart>
      <div className="bottle-container">        
        {
          bottles.map(bottle => <Bottole 
            key={bottle.id} 
            handleAddToCart={handleAddToCart}
            bottle={bottle}></Bottole>)
        }
      </div>
    </div>
  );
};

export default Bottoles;