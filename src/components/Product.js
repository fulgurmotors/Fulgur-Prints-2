import React from "react";
import './Product.css'

function Product({id, title, image, price, rating}){
    return (
        <div className="product">
            <div className="product__info">
                <div className="title">
                    {title}
                </div>
                <div className="price">
                    <strong>{price}</strong>
                    <small>€</small>
                </div>
            </div>
        </div>
    )
}

export default Product