import './App.css';
import React from 'react';


const SignUp=()=>{
  const [name,setName]=React.useState("")
  const [password,setPassword]=React.useState("")
    
  function getDetails(){
    
  }
  return(
   <div className="Signup">
   <form className="SignUp Form" onSubmit={getDetails}>
     <input type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)}></input>
     <br></br>
     <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
     <div className="SignUpButton" >
       <input type="submit"></input>
     </div>
   </form>
   
   
  </div>)
}

function App() {
  return (
    <div className="App">
        <SignUp></SignUp>
    </div>
  );
}

export default App;
