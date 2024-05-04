import { useEffect, useState } from "react"
import UserCard from "../UserCard/UserCard"
import './dataList.css';


export default function DataList({page}){

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
    <p>{list.map(element => {
      
      return (<div>
  
        <UserCard item={element}/>
  
      </div>
      )
  

  })}</p></div>)
  }