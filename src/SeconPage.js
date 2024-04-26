import { useState,useEffect } from "react";

export default function SeconPage(){

 const [file, setFile]=useState([])

 useEffect(()=>{


    fetch("https://reqres.in/api/users?page=2") 
    .then(respuesta => respuesta.json())
    .then((datos)=>{

      
        console.log(datos.data)
    
      
      
      setFile(datos.data)
  
      
    })
    



    
  },[])
  

  return(
      <div className="page2">


    <p>{file.map(elemento => {
        return (
          <div>

            <div className='cards'>

          <div className='image'>
            <img src={elemento.avatar}></img>
          </div>
          
          <div className='first_name'><b>First name:</b> {elemento.first_name}</div>
          <div className='last_name'><b>Last name:</b> {elemento.last_name}</div>
          <div className='id'><b>Id:</b> {elemento.id}</div>
          <div className='email'><b>Email:</b> {elemento.email}</div>
          </div>
          
          </div>
         
        )

      })}</p>


      </div>
  )


       


}