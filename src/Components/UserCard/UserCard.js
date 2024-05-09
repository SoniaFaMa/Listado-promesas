import './userCard.css'


 export default function UserCard({user}){

 
    return( 
  
  <div>
    
      <div className='cards'>
  
      <div className='image'>
        <img src={user.avatar}></img>
      </div>
      
      <div className='first_name'><b>First name:</b> {user.first_name}</div>
      <div className='last_name'><b>Last name:</b> {user.last_name}</div>
      <div className='id'><b>Id:</b> {user.id}</div>
      <div className='email'><b>Email:</b> {user.email}</div>
      </div> 

      </div>
  
    )
  }
  