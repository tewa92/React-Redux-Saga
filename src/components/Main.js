import {addToCart, removeFromCart, emptyCart} from '../redux/action';
import {useDispatch, useSelector} from 'react-redux';
import {productList} from '../redux/productAction'
import { useEffect } from 'react';


function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData);
  console.warn("data in main component", data);


useEffect(()=> {
  dispatch(productList())
}, [])

  return (
    <div>
        <div>
          <button onClick={() =>dispatch(emptyCart())}>
            Empty cart
          </button>
        </div>
       <div>
      </div>

      <div className="product-container">
      {
        data.map((item)=> (
        <div key={item.id} className="product-item">
          <img src={item.imgUrl} alt=""/>
          <div>Name: {item.name}</div>
          <div>Color: {item.color}</div>
          <div>Price: {item.price}</div>
          <div>Category: {item.category}</div>
          <div>Brand: {item.brand}</div>
          <div>
          <button onClick={() =>dispatch(addToCart(item))} >Add to cart</button>
          <button onClick={() =>dispatch(removeFromCart(item.id))}>Remove to cart</button>
          </div>

        </div>
        ))
      }
     </div>

    </div>
  );
}

export default Main;
