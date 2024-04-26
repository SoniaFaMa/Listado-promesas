
import { useEffect,useState } from 'react';
import './App.css';
// import EjemploCount from './EjemploCount';
// import SeconPage from './SeconPage';

  // el estado es un objeto que contiene datos y pueden cambiar
  //useState permite añadir estado a los componentes
  //un Hook permite utilizar el estado y otras cosas en componentes
  function App() {

    // lista es el valor
    // setLista es una funcion que modifica lista
    // El valor iniciar es lo que le paso a useState, en este caso un array vacio
    const [list,setList]=useState([])
   
      useEffect(()=>{


        fetch("https://reqres.in/api/users?page=1") 
        .then(response => response.json())
        .then((data)=>{

          setList(data.data)
          // lista = datos.data
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

    // count = valor inicial
    // setCount= funcion que actualiza el valor del estado
    // (0) = valor inicial de la variable de estado que se está declarando
    //useState se renderiza automaticamente el componente cada vez que cambie el valor del estado
   
    return (
      
      <div className="App">
        <button onClick={BackButton}>Atras</button>
      <button onClick={NextButton}>Siguiente</button>
      
       {/* <EjemploCount/> */}
       {/* <SeconPage/> */}

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
        {/* <p>{lista}</p> */}
        
      

      </div>

       
    );
  }
  //<button onClick={() => setCount(count +1)}>Click me</button>
  export default App;





