import { ReactElement } from "react";
import "./Home.css";
import logoHolmes from "/home/ronis/Projects/POC-Buscador/src/assets/logoHolmesConvertida.svg";
import { Link } from "react-router-dom";
import { Button } from "antd";



function App(): ReactElement {
  return (
    <div className="ajust_container teste">
      <img className="logo" src={logoHolmes} alt="Logo da decolar" />
      <h1 className="titulo">POC - Buscador</h1>
      <p className="texto">Bem-vindo 😀</p>

      <Button type="default">
        <Link to="/buscador">Acessar tela de busca</Link>
      </Button>


    </div>
  );
}

export default App;
