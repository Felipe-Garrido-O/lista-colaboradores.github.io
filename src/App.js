import "./index.css";
import Header from "./components/Header";
import {Input}  from "./components/Input";
import { useState } from "react";


function App() {
 
  const [buscar, setBuscar] = useState("");

  return (
         
    <div className="App">

    <Header setBuscar ={setBuscar}/>
    <Input buscar ={buscar}/>  

    </div>
  );
}

export default App;
