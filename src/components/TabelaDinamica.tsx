import Table from "react-bootstrap/Table";
import './TabelaDinamica.css'
import { exportToExcel } from "../functions/exportToExcel";

type Registro = {
  nomeDocumento: string;
  sistemaOrigem: string;
  linkDownload: string;
};

type Props = {
  registros: Registro[];
};

function TabelaDinamica({ registros }: Props) {
  return (
    <div>
      <div>
        <Table id="tabela-dinamica" className="tabela" striped bordered hover>
          <thead>
            <tr>
              <th>Nome do Documento</th>
              <th>Sistema de origem</th>
              <th>Link para download</th>
            </tr>
          </thead>
          <tbody>
            {registros.map((registro, index) => (
              <tr key={index}>
                <td>{registro.nomeDocumento}</td>
                <td>{registro.sistemaOrigem}</td>
                <td>
                  <a
                    target="_blank"
                    href={registro.linkDownload}
                    download={registro.linkDownload}
                  >
                    Download
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div>
      <button className="botao_exportar" onClick={() => exportToExcel(registros)}>Baixar resultado</button>
      </div>
    </div>
  );
}

export default TabelaDinamica;

