import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import DATA from '../DATA';
import {addItem, delItem} from '../redux/actions/index.js';

const ProductDetail = () => {
    const [cartBtn, setCartBtn] = useState('Add to Cart');
    const proId = useParams();
    const proDetail = DATA.filter(x => x.id == proId.id);
    const product = proDetail[0];
    const dispatch = useDispatch();
    const handleCart = (product) => {
        if(cartBtn === "Add to Cart"){
            setCartBtn('Remove from Cart');
            dispatch(addItem(product));
        }else{
            setCartBtn('Add to Cart');
            dispatch(delItem(product));
        }
    }
  return (
    <div>
        <div className='container my-5 py-3'>
            <div className='row'>
                <div className='col-md-6 d-flex justify-content-center mx-auto product'>
                    <img src={product.img} alt={product.title} height="400px"/>
                </div>
                <div className='col-md-6 d-flex flex-column justify-content-center'>
                    <h1 className='display-5 fw-bold'>{product.title}</h1>
                    <hr />
                    <h2 className='my-4'>${product.price}</h2>
                    <p className='lead'>{product.desc}</p>
                    <button onClick={()=>handleCart(product)} className='btn btn-outline-primary my-5'>{cartBtn}</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail