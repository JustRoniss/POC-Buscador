import React, { useState } from "react";
import "./Buscador.css";
import TabelaDinamica from "../components/TabelaDinamica";
import { gerarNomeDocumentoAleatorio } from "../functions/gerarNomeDocumento";
import { loading } from "../functions/loading";
import Loading from "../components/Loading";
import Search from "antd/es/input/Search";
import { Space, Input, Form, Alert } from "antd";

type Registro = {
  nomeDocumento: string;
  sistemaOrigem: string;
  linkDownload: string;
};

function Buscador() {
  const [registros, setRegistros] = useState<Registro[]>([]);
  const [pesquisado, setPesquisado] = useState(false);
  const [nomeFornecedor, setNomeFornecedor] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSearch = (value: string) => {
    if (value.length < 4) {
      alert("Digite ao menos 4 carecteres");
    } else {
      handlePesquisar();
    }
  };

  const handlePesquisar = async () => {
    setIsLoading(true);
    await loading(2000);
    setIsLoading(false);

    const qntdRegistros: number = Math.floor(Math.random() * 10) + 1;
    console.log("Quantidade de registros: " + qntdRegistros);

    const novosRegistros: Registro[] = [];
    for (let i = 0; i < qntdRegistros; i++) {
      const nomeDocumento = gerarNomeDocumentoAleatorio();
      const sistemaOrigem: string = "HUTZ";
      const linkDownload: string =
        "https://www.africau.edu/images/default/sample.pdf";
      await novosRegistros.push({ nomeDocumento, sistemaOrigem, linkDownload });
    }

    await setRegistros(novosRegistros);
    setPesquisado(true);
  };

  return (
    <div className="ajust_container">
      <div>
        <Space.Compact>
          <Input.Search
            style={{ width: "440px" }}
            placeholder="Digite o nome do fornecedor"
            onChange={(e) => setNomeFornecedor(e.target.value)}
            allowClear
            value={nomeFornecedor}
            size="large"
            enterButton
            onSearch={onSearch}
          />
        </Space.Compact>
      </div>
      <div>
        {isLoading && <Loading />}
        {pesquisado && (
          <div className="lista_documentos">
            <TabelaDinamica registros={registros} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Buscador;
