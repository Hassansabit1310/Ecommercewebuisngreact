import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import RequestOrderList from '../store/action/getorderlistaction';
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body,
  padding: 20,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height:'70vh',
  width:500,
  margin:'20px auto'
  
}));



const GetOrderLists=()=>{

    const {orders}=useSelector(store=>store.getOrderListReducer)
    
    

  
    
    

    const dispatch=useDispatch()

    const token = JSON.parse(localStorage.getItem('token'));
   
    useEffect(()=>{

        dispatch(RequestOrderList(token))

     

      
        

    },[])

    return(
        <>
       {/* <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div> */}

<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
          <table>
  <tr>
    <th>Name</th>
    <th>Order</th>
    
  </tr>
  <tr>
  
 
  </tr>
  {orders.map(order=>order.products.map(product=>{
   return(
    <>
    <tr>
    <td>{order.userId?.username}</td>
    <td>{product.productId?.description}</td>
    </tr>
    
    </>

   
   
  )

}))}

  
</table>


{orders.map(order=>{order.products.map(product=>{
   
    
   





  })})}
    

          </Item>
        </Grid>
        
      </Grid>
    </Box>




    
    
     
        
        </>
    )
}

export default GetOrderLists