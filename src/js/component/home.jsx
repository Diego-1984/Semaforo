import React from "react";
import Semaforo from "./semaforo.jsx";
import Semaforo2 from "./semaforo2.jsx";

const Home = () => {
	return (
		<>
		<div className="container d-flex justify-content-center mt-5 bg-dark w-25 p-5 rounded">
			<h1><Semaforo /></h1>
			<h1><Semaforo2 /></h1>

		</div><div className="container d-flex justify-content-center mt-5 ">
		<button onClick="myFunction()">Start</button>
		</div>
		</>
	);
};

export default Home;
