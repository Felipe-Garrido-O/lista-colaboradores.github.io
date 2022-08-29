import React from 'react';

export const Header = (Props) => {
  
  const validarBuscar = (e) => {
    Props.setBuscar(e.target.value);
    }
  
  return (
    <div className='hdr'>
    <h2>Buscar Colaboradores</h2>
    <form className='form1'>
    <input name='buscador' type="text" placeholder="Buscar..." onChange={validarBuscar} ></input> 
    </form>
    </div>
  )
}
export default Header;
