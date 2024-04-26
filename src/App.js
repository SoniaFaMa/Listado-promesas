
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
    const [lista,setLista]=useState([])
   
      useEffect(()=>{


        fetch("https://reqres.in/api/users?page=1") 
        .then(respuesta => respuesta.json())
        .then((datos)=>{

          setLista(datos.data)
          // lista = datos.data
        })
         
      },[])

      function BotonSiguiente(){
        fetch("https://reqres.in/api/users?page=2") 
       .then(respuesta => respuesta.json())
        .then((datos)=>{
    
        setLista(datos.data)

        })

      }

      function BotonAtras(){
        fetch("https://reqres.in/api/users?page=1") 
       .then(respuesta => respuesta.json())
        .then((datos)=>{

        setLista(datos.data)

        })
      }

    

      

    // count = valor inicial
    // setCount= funcion que actualiza el valor del estado
    // (0) = valor inicial de la variable de estado que se está declarando
    //useState se renderiza automaticamente el componente cada vez que cambie el valor del estado
   
    return (
      
      <div className="App">
        <button onClick={BotonAtras} >atras</button>
      <button onClick={BotonSiguiente}>siguiente</button>
      
       {/* <EjemploCount/> */}
       {/* <SeconPage/> */}

      <p>{lista.map(elemento => {
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
        {/* <p>{lista}</p> */}
        
      

      </div>

       
    );
  }
  //<button onClick={() => setCount(count +1)}>Click me</button>
  export default App;





