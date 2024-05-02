import ReactDOM from "react-dom/client";
import { useState } from "react";
import './index.css'



const App = (props) => {
  const [contador, updateContador] = useState(8);
  const handleClick = () => {
    updateContador(contador + 1);
  }
  const handleClickReset = () => {
    updateContador(0);
  }
  const isEven = contador % 2 === 0;
  const mensajePar = isEven ? "Es número Par" : "Es número Impar";

  return (
    <div className="contenedor">      
      <p className="titulo">El valor de contador es:</p>
      <h1 className="contador">{contador}</h1>
      <div className="contenedor-mensajes">
      <p className="mensaje">{mensajePar}</p>
      </div>
      
      <div className="button-container">
        <button className="button"
          onClick={handleClick}
        >
          Incrementar
        </button>
      </div>
      <div className="button-reset-container">
        <button className="button"
          onClick={handleClickReset}
        >
          Resetear
        </button>
      </div>
        
    </div>
  
  );
}




  ReactDOM.createRoot(document.getElementById('root')).render(  
    <App  />
  );


