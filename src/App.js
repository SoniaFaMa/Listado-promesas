
import { useState } from 'react';
import UserList from './Components/UserList/UserList';
import './App.css';


function App() {
    
    const [page,setPage]=useState(1) 

       function NextButton(){
        setPage(page +1)
        
        if (page===2){
          return setPage(page)
        }
    
      }
    
     function BackButton(){
        setPage(page -1)
        if(page===1){
          return setPage(page)
        }
      }

      
    return (
      <div className="App">
          <UserList page={page} />

       <div className='buttons'>
            
            <button className='button' onClick={BackButton}>Atras</button>
            <button className='button' onClick={NextButton}>Siguiente</button>
         </div>
     
     </div>


    );
  }
  
  export default App;





