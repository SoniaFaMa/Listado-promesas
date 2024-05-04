
import { useState } from 'react';
import DataList from './Components/DataList/DataList';
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
         <DataList/>

       <div className='buttons'>
            
            <button onClick={BackButton}>Atras</button>
            <button onClick={NextButton}>Siguiente</button>
         </div>
     
     </div>


    );
  }
  
  export default App;





