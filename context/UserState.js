import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import UserContext from "./userContext";

const UserState = (props) => {

    const [userData, setUserData] = useState()
   const jwt = Cookies.get('jwt')

    const getUser = async() =>{
    await axios.get(`https://ezheal.in/api/users/me`,{
    headers:{
      'Content-Type':'application/json',
      Authorization:`Bearer ${jwt}`
    }
  }).then((data)=>{
    // console.log(data)
    setUserData(data);
  }).catch(error => {
    console.error(error);
    setUserData()
  })}

  useEffect(() => {getUser()}, [jwt])
    return (
        <UserContext.Provider value={userData}>{props.children}</UserContext.Provider>
    )
}

export default UserState;