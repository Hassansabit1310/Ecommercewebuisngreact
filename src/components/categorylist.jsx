import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import RequestCategoryList from '../store/action/getcategoryaction'

const CategoryList=()=>{
    const dispatch=useDispatch()

    useEffect(()=>{

        dispatch(RequestCategoryList())

    },[])
    return(
        <>
        </>
    )
}
export default CategoryList