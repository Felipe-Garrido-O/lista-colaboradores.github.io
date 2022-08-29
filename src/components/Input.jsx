import React from 'react';
import { useState } from 'react';
import { BaseColaboradores } from '../BaseColaboradores';


export const Input = (Props) => {

  const [ cuenta, setCuenta] = useState('');

  const [ nombreColab, setNombreColab] = useState('');

  const [ emailColab, setEmailColab] = useState('');

  const [ baseColab, setBaseColab] = useState( BaseColaboradores );


     const contador = () => {
     setCuenta(cuenta + 1)
    }

    const enviarFormulario = (e) => { e.preventDefault()
    setBaseColab([...baseColab, {id: {contador} , nombre: nombreColab, correo: emailColab} ]);
    
    }

    const inputColab = (e) => {
    setNombreColab(e.target.value);
    }
    
    const inputEm = (e) => {
    setEmailColab(e.target.value);
    } 

  return (
    
<div>

<form onSubmit={enviarFormulario}>

<div className='form'>

<h3>Ingresar Colaborador</h3>

<input name='nombreColab' value={nombreColab} placeholder="Nombre" onChange={inputColab} ></input> 

<input name='emailColab' value={emailColab} placeholder="Email" onChange={inputEm} ></input> 

</div>

<button className='btn' type='submit'>Agregar</button>

</form>

<div className='colab'>
   <h3>Lista de Colaboradores</h3> 
   {baseColab.filter(col =>{
    if (Props.buscar === ""){
      return col;
    } else (col.nombreColab
      .includes(Props.buscar.toLocaleLowerCase()))
      return col;
    }).map(col => (<ul><li key={col.id}>
    {col.nombre} - {col.correo}
    </li>
    </ul>
   ))}

</div>
</div>
  );
}
export default Input;     



