import React from 'react'

export default function Product(props){
    const {product, onAdd} = props;
  return (
    <div>
        <img className="small" src={product.img} alt={product.anme}></img>
        <h3>{product.name}</h3>
        <div>${product.price}</div>
        <div>
            <button onClick={() => onAdd(product)}>Add To Cart</button>
        </div>
    </div>
  )
}

