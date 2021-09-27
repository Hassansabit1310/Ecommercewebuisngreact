import axios from "axios"
import { ActionTypes } from "../ActionType"

const AddnewUser=(user)=>{
    return{
        type:ActionTypes.Add_User,
        payload:user

    }
}

const RequestAddUser=(lat,long,city,street,number,zipcode,role,email,username,phone,password,token)=>{
    const data={
        address: {
            geolocation: {
                lat: lat,
                long: long
            },
            city: city,
            street: street,
            number: number,
            zipcode: zipcode
        },
        role: role,
        email: email,
        username: username,
        phone: phone,
        password: password
    }
    return async(dispatch)=>{

        axios.post("http://localhost:8080/user",data,
        {
            headers:{
    
                authorization: `bearer ${token}`
            }
         
            
        }).then(response=>{dispatch(AddnewUser(response.data))})

    }
}

export default RequestAddUser