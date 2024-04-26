
import { useEffect,useState } from 'react';
import './App.css';


  function App() {

    
    const [list,setList]=useState([])
   
      useEffect(()=>{


        fetch("https://reqres.in/api/users?page=1") 
        .then(response => response.json())
        .then((data)=>{

          setList(data.data)
          
        })
         
      },[])

      function NextButton(){
        fetch("https://reqres.in/api/users?page=2") 
       .then(response => response.json())
        .then((data)=>{
    
        setList(data.data)

        })

      }

      function BackButton(){
        fetch("https://reqres.in/api/users?page=1") 
       .then(response => response.json())
        .then((data)=>{

        setList(data.data)

        })
      }

    
    return (
      
      <div className="App">

      <button onClick={BackButton}>Atras</button>
      <button onClick={NextButton}>Siguiente</button>
      

      <p>{list.map(element => {
        return (
          <div>

            <div className='cards'>

          <div className='image'>
            <img src={element.avatar}></img>
          </div>
          
          <div className='first_name'><b>First name:</b> {element.first_name}</div>
          <div className='last_name'><b>Last name:</b> {element.last_name}</div>
          <div className='id'><b>Id:</b> {element.id}</div>
          <div className='email'><b>Email:</b> {element.email}</div>
          </div>
          
          </div>
         
        )

      })}</p>
        
        
      

      </div>

       
    );
  }
  
  export default App;





