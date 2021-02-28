import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
   // console.log(props.element)
    const {name,img,seller,price,stock} = props.element;
    return (
        
        <div className="product-div">
            <div className="product-img">
            <img src={img} alt=""></img>
            </div>
            
            <div className="product-details">
               <h2>{name}</h2> 
               <br/>
               <p ><small>by: {seller}</small></p>
               <p>${price}</p>
               <br/>
                <p>only {stock}  left in stock-available </p>
                <br/>
                <button className="product-button" onClick={()=>props.buttonHandler(props.element)}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                    
                     add to cart
                </button>
            </div>
           
        </div>
    );
};

export default Product;