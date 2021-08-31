import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { RequestProductList } from '../store/action/setproductlist'

const ProductList=()=>{

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(RequestProductList())

    },[])

    return(
        <>
        <p>Hello</p>
        </>
    )

}

export default ProductList