import React from 'react'
import { useParams } from 'react-router-dom'
import DATA from '../Data';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addItem,delItem} from '../redux/actions/index'

export default function ProductDetail() {
    const [cartButton, setCartButton] = useState("Add to Cart")

    const proid = useParams();
    const proDetail = DATA.filter(x=>x.id==proid.id)
    const product = proDetail[0];
    console.log(product);

    const dispatch = useDispatch()
    const handleCart = (product) => {
        if(cartButton === "Add to Cart"){
            dispatch(addItem(product))
            setCartButton("Remove from Cart")
        }
        else{
            dispatch(delItem(product))
            setCartButton("Add to Cart")
        }

    }

  return (
    <>
    <div className="container mu-5 py-3">
        <div className="row">
            <div className="col-md-6 d-flex justify-content-center mx-auto product">
                <img src={product.img} alt={product.name} height="400px"/>
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
                <h1 className='display-5 fw-bold'>{product.name}</h1>
                <hr/>
                <h2 className='my-4'>{product.price}₺</h2>
                <button onClick={()=>handleCart(product)} className="btn btn-outline-success my-5">{cartButton}</button>
            </div>
        </div>
    </div>
    </>
  )
}
