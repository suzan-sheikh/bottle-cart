import propTypes from 'prop-types'
import './Bottle.css';
const Bottole = ({bottle, handleAddToCart}) => {
  const {name, price, img} = bottle;
  return (
    <div>
      <div className="bottle-item">          
        <h3>Bottle: {name}</h3>
        <img src={img} alt="" /> 
        <p>Price ${price}</p>  
        <button onClick={() => handleAddToCart(bottle)}>Add To Card</button> 
      </div>        
    </div>
  );
};
Bottole.propTypes = {bottle: propTypes.object.isRequired, handleAddToCart: propTypes.func.isRequired}



export default Bottole;