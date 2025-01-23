import { useState } from "react";
import "./styles.css";

function Home() {
  const [count, setCount] = useState(0);
  const [isBackdropVisible, setBackdropVisible] = useState(true);

  return (
    <>
      <div className="container-content">
        {isBackdropVisible && (
          <div className="backdrop" onClick={() => setBackdropVisible(false)}>
            <div className="card">
              <h1>Vite + React</h1>
              <button onClick={() => setBackdropVisible(false)}>
                Fechar Backdrop
              </button>
              <p>Clique fora ou no botão para fechar o backdrop</p>
            </div>
          </div>
        )}
        <button onClick={() => setBackdropVisible(true)}>
          Mostrar Backdrop
        </button>
      </div>
    </>
  );
}

export default Home;
