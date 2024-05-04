import { useEffect, useState } from "react"
import UserCard from "../UserCard/UserCard"
import './dataList.css';


export default function DataList(){

    const [list,setList]=useState([])
    const [page,setPage]=useState(1) 
  
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