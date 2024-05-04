import './userCard.css'


 export default function UserCard({item}){

 
    return( 
  
  <div>
    
      <div className='cards'>
  
      <div className='image'>
        <img src={item.avatar}></img>
      </div>
      
      <div className='first_name'><b>First name:</b> {item.first_name}</div>
      <div className='last_name'><b>Last name:</b> {item.last_name}</div>
      <div className='id'><b>Id:</b> {item.id}</div>
      <div className='email'><b>Email:</b> {item.email}</div>
      </div> 

      </div>
  
    )
  }
  