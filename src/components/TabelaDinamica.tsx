import Table from "react-bootstrap/Table";


type Registro = {
  nomeDocumento: string;
  sistemaOrigem: string;
  linkDownload: string;
};

type Props = {
  registros: Registro[];
};

const file = "../files/file.txt"

function TabelaDinamica({ registros }: Props) {
  return (
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
              <a target="_blank" href={registro.linkDownload} download={registro.linkDownload}>Download</a>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TabelaDinamica;
