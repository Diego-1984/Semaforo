import React, { useState, useEffect } from 'react';

const Luz1 =()=>  {
  const [verde, setVerde] = useState("🟢");

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (verde < 9) {
        setVerde(verde +10);
      } else {
        setVerde("⚫");
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [verde]);

  return (
    <div>
      <h1>{verde}</h1>
    </div>
  );
}

export default Luz1;