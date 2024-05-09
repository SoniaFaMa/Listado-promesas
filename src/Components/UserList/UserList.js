import { useEffect, useState } from "react"
import UserCard from "../UserCard/UserCard"
import './userList.css';


export default function UserList({page}){

    const [list,setList]=useState([])
    
  
    useEffect(()=>{
  
      fetch(`https://reqres.in/api/users?page=${page}`) 
      .then(response => response.json())
      .then((data)=>{
        setList(data.data)
        
      })
       
    },[page])
  
    return (
      <div>
    <p className="users">{list.map(user => {
      
      return (<div>
  
        <UserCard user={user}/>
  
      </div>
      )
  

  })}</p></div>)
  }