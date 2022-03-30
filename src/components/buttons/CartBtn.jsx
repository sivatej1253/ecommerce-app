import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";

const CartBtn = () => {
  const state = useSelector((state)=> state.addItems)
  console.log("st", state);
  return (
    <>
        <NavLink className="btn btn-outline-primary ms-2" to="/cart">
            <span className='fa fa-shopping-cart me-1'> Cart ({state.length})</span>
        </NavLink>
    </>
  )
}

export default CartBtn