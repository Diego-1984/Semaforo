//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import Luz1 from "./component/semaforo.jsx";

//import your own components
import Semaforo from "./component/semaforo.jsx";

//render your react application
ReactDOM.render(<Luz1 />, document.querySelector("#app"));
