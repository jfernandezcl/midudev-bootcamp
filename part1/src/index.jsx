import ReactDOM from "react-dom/client";
import { useState } from "react";
import './index.css'


const App = () => {
  const [counters, setCounters] = useState ({
    left: 0,
    right: 0,
    clicks: 0
  })
  const handleClickLeft = () => {
    const newCountersState = {
      ...counters,
      left: counters.left + 1,
      clicks: counters.clicks + 1,
    }
    setCounters(newCountersState);
  }
  const handleClickRight = () => {
    setCounters ({
      ...counters,
      right: counters.right + 1,
      clicks: counters.clicks + 1
    });
  };
  return (
    <div className="container">
      <p className="title">Contador de clicks</p>
      <div className="container-button">
      {counters.left}
      <button className="button" onClick={handleClickLeft}>Left</button>
      <button className="button" onClick={handleClickRight}>Right</button>
      {counters.right}
      </div>
      <p className="title">Clicks totales: {counters.clicks}</p>
    </div>
  )
}

  ReactDOM.createRoot(document.getElementById('root')).render(  
    <App  />
  );


