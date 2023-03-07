import React, { useState, useEffect } from 'react';

const Semaforo =()=>  {
  const [verde, setVerde] = useState("🟢","⚫");

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (verde < 1) {
        setVerde("🟢");
      } else {
        setVerde("⚫");
      }
    }, 2000);

    return () => clearInterval(intervalId);
  }, [verde]);

  const [amarillo, setAmarillo] = useState("⚫","🟡",);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (amarillo < 1) {
        setAmarillo("⚫");
      } else {
        setAmarillo("🟡");
      }
    }, 2000);

    return () => clearInterval(intervalId);
  }, [amarillo]);

  const [rojo, setRojo] = useState("⚫","🔴",);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (rojo < 1) {
        setRojo("⚫");
      } else {
        setRojo("🔴");
      }
    }, 4000);

    return () => clearInterval(intervalId);
  }, [rojo]);

  return (
    <div>
      <h1>{verde}</h1>
      <h1>{amarillo}</h1>
      <h1>{rojo}</h1>
    </div>
  );
}

export default Semaforo;