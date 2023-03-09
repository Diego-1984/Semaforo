import React, { useState} from 'react';

const Semaforo2 =()=>  {
  const [negro, setNegro] = useState("🟡");
  const [amarillo, setAmarillo] =useState("⚫");
  
  

  useState(() => {
    const cambiarEstado = setInterval(() => {
      if (verde === 1) {
        setNegro();
      } else {
        setAmarillo("🟡",);
      } 
    }, 4000);
     
    
  },);

  return (
    <div>
      <h1>{amarillo}</h1>
    </div>
  );
}

export default Semaforo2;