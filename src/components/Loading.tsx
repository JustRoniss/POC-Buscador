import React, { useEffect, useState } from "react";
import "./Loading.css";
const Loading = () => {
  const Randomfrases: number = Math.floor(Math.random() * 4) + 1;
  const [frase, setFrase] = useState(""); 


  useEffect(() => {
    switch (Randomfrases) {
      case 1:
        setFrase("Os pequenos detalhes são sempre os mais importantes");
        break;
      case 2:
        setFrase("Eu sou um cérebro, Watson. O resto é mero apêndice.");
        break;
      case 3:
        setFrase("Você vê, mas não observa.");
        break;
      case 4:
        setFrase("Todos os problemas se tornam infantis depois de explicados");
        break;
    }
  })


  return (

    <div className="container">
      <div className="loading-spinner"></div>
      <p>
         {frase}. <br />
        <i>Sherlock Holmes</i>{" "}
      </p>
    </div>
  );
};

export default Loading;
