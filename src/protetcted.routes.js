import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router'
export const ProtectedRoute=({component:Component, ...rest})=>{
    const {isLoggedin}=useSelector(store=>store.loginStatusReducer)
    
    return(
        <Route
        {...rest}
        render={props=>{
            if(isLoggedin){

                return <Component {...props}/>
            }
            else
            {
                return (
                    <Redirect
                    to={
                        {
                            pathname: "/",
                            state:{
                                from:props.location
                            }
                        }
                    }
                    
                    />
                )
            }
            
        }}
        
        />
    )

}