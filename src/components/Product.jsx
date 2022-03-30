import React from 'react';
import { NavLink } from 'react-router-dom';
import DATA from '../DATA';

const Product = () => {
  const cardItem = DATA.map((item)=> {
    console.log('im', item.img)
    return (
      <div className="card my-5 py-4" style={{width: "18rem"}} key={item.id}>
      <img src={item.img} className="card-img-top" alt={item.title} />
      <div className="card-body text-center">
        <h5 className="card-title">{item.title}</h5>
        <p className='lead'>$ {item.price}</p>
        <NavLink to={`/products/${item.id}`} className="btn btn-outline-primary">Buy Now</NavLink>
      </div>
    </div>
    );
  })
  return (
    <div>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h1>Product</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row justify-content-around'>
          {cardItem}
        </div>
      </div>
    </div>
  )
}

export default Product