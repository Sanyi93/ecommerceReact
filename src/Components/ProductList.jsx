import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// addItemToCart used to get the reducer function detail to dispatch which product is added to the cart to store.sj
import { addItemToCart } from './CartSlice';
import './ProductList.css'; 

const ProductList = () => {

    const dispatch = useDispatch();
    const [disabledProducts, setDisabledProducts] = useState([]);

    const handleAddToCart = product => {
            dispatch(addItemToCart(product));
            //marking the product as disabled
            setDisabledProducts([...disabledProducts, product.id])
    };


  const products = [
    { id: 1, name: 'Product A', price: 60 },
    { id: 2, name: 'Product B', price: 75 },
    { id: 3, name: 'Product C', price: 30 },
  ];


  return (
    <div className="product-list">
      <h2 className="product-list-title">Products</h2>
      <ul className="product-list-items">

        {products.map(product => (
            <li key={product.id} className="product-list-item">
                <span>{product.name} - {product.price}</span>
                <button 
                className={`add-to-cart-btn ${disabledProducts.includes(product.id) ? 'disabled' : ''}`}
                onClick={()=> handleAddToCart(product)}
                //disable the button if the product is in "disabledProducts"
                disabled={disabledProducts.includes(product.id)}>
                    Add To Cart
                </button>
            </li>
        ))}
     
      </ul>
    </div>
  );
};

export default ProductList;
