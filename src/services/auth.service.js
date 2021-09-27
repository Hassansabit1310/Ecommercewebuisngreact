import axios from "axios"
import { error } from "jquery"

import GetLoginData from "../store/action/setlogindata"
import SetLoginStatus from "../store/action/setloginstatus"
import SetMessage from "../store/action/setmessage"
import SetToken from "../store/action/settoken"

const URL="http://localhost:8080/"
const SetLoginData=(email,password)=>{

    return async(dispatch)=>{

        axios.post(URL+"signin",{
            email:email ,
            password:password
          }).then(response=>{ dispatch(GetLoginData(response.data)); localStorage.setItem("user",JSON.stringify(response.data.userInfo.role));localStorage.setItem("token",JSON.stringify(response.data.userInfo.token)); dispatch(SetToken(response.data.userInfo.token));dispatch(SetLoginStatus()) })
         
          
    }



}



export default SetLoginData