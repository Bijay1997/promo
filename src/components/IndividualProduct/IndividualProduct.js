import React from 'react'
import './IndividualProduct.css'

const IndividualProduct = (props) => {
    const {id, title, price, sku, isFreeShipping,installments} = props.product;
    console.log("props", props.product);
    

     const imageUrl1 = require(`../../images/products/${sku}-1-cart.webp`);
     const imageUrl2 = require(`../../images/products/${sku}-2-product.webp`);
  return (
    <div className="shoppingCard" key={id}>

        {isFreeShipping && (<p className="shipFree">Free shipping</p>)}

        <div className="image">
            <img style={{
                // height: "300px",
            }} src={imageUrl1}
            onMouseEnter={(e) => (e.currentTarget.src = imageUrl2)}
            onMouseLeave={(e) => (e.currentTarget.src = imageUrl1)}
            alt={title} />

            <p className="content">{title}</p>

            <div className="dollar">${price}</div>
            {installments ? <div className="installment">{`${installments}* $${ (price/installments).toFixed(2)}`}</div>
: <div className="installment" ></div>}
            <div>
                <button className="btn"> Add to cart</button> 
              
            </div>
        </div>
        
        
        
        
        </div>
  )
}

export default IndividualProduct