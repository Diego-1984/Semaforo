import React, { useState} from 'react';

const Semaforo =()=>  {
  const [verde, setVerde] = useState("🟢");
  const [negro, setNegro] =useState("⚫");
 
  

  useState(() => {
    const cambiarEstado = setInterval(() => {
      if (verde === 1) {
        setNegro();
      } else {
        setVerde("⚫",);
      } 
    }, 2000);
     
    
  },);

  return (
    <div>
      <h1>{verde}</h1>
    </div>
  );
}

export default Semaforo;