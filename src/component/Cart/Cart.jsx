import PropTypes from 'prop-types';
import './Cart.css'
const Cart = ({cart, handleRemoveFromCart}) => {

  return (
    <div>
      <h3>Cart: {cart.length} </h3>
      <div className="cart-container">        {
          cart.map(bottol => 
            <div key={bottol.id}>
              <img src={bottol.img}></img>
              <button onClick={() => handleRemoveFromCart(bottol.id)}>Remove</button>
            </div>            
            )
        }
      </div>
    </div>
  );
};

export default Cart;

Cart.propTypes = {cart: PropTypes.array.isRequired, handleRemoveFromCart: PropTypes.func.isRequired}