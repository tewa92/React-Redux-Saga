import {addToCart, removeFromCart, emptyCart} from '../redux/action';
import {useDispatch, useSelector} from 'react-redux';
import {productList} from '../redux/productAction'

function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData);
  console.warn("data in main component", data);

  // const product = {
  //   name: "i-phone",
  //   category: "mobile",
  //   price: "1000",
  // }

  const product = [
  {
    name: "i-phone",
    category: "mobile",
    price: "1000",
  },
  {
    name: "macbook pro",
    category: "laptop",
    price: "2000",
  },
  {
    name: "galaxy s22",
    category: "mobile",
    price: "850",
  },
  {
    name: "ipad air",
    category: "tablet",
    price: "700",
  },
  {
    name: "airpods pro",
    category: "accessory",
    price: "250",
  },
  {
    name: "apple watch",
    category: "wearable",
    price: "400",
  },
  {
    name: "sony headphones",
    category: "accessory",
    price: "180",
  },
  {
    name: "dell xps 13",
    category: "laptop",
    price: "1500",
  },
  {
    name: "samsung smart tv",
    category: "home electronics",
    price: "1200",
  },
  {
    name: "google pixel 7",
    category: "mobile",
    price: "799",
  }
];

  return (
    <div>
      <button onClick={() =>dispatch(addToCart(product))}>
        Add to cart
      </button>
        <div>
          <button onClick={() =>dispatch(removeFromCart(product.name))}>
            Remove from cart
          </button>
        </div>
        <div>
          <button onClick={() =>dispatch(emptyCart())}>
            Empty cart
          </button>
        </div>
       <div>
        <button onClick={() =>dispatch(productList())}>
          Product List
        </button>
      </div>

    </div>
  );
}

export default Main;
