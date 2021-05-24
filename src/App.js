import React, { useState } from 'react'; 
import logo from './logo.svg';
import './App.css';
import AddClient from "./components/compo/AddCient";
import ContactList from "./components/compo/ContactList";


function App() {
  const [state, setState] = useState([]);
  
  const handleUserData = (userData)=>{
    setState([...state,userData]);
    console.log(state);

  };   

  return (
    <>
      <AddClient handleUserData={handleUserData} />
      {/* {state.length>0 && <ContactList data={state} />} */}
    </>
  );
}

export default App;
