import { Space, Table } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";

import "./TabelaDinamica.css";
import { exportToExcel } from "../functions/exportToExcel";

interface Registro {
  nomeDocumento: string;
  sistemaOrigem: string;
  linkDownload: string;
}

interface Props {
  registros: Registro[];
}

const TabelaDinamica: React.FC<Props> = ({ registros }) => {
  let linkDownlaod = registros.find((registro) => registro.linkDownload);
  const linkValue = linkDownlaod?.linkDownload;

  const columns = [
    {
      title: "Nome do documento",
      dataIndex: "nomeDocumento",
      key: "nomeDocumento",
    },
    {
      title: "Sistema de origem",
      dataIndex: "sistemaOrigem",
      key: "sistemaOrigem",
    },
    {
      title: "Link Download",
      dataIndex: "linkDownload",
      key: "linkDownload",
      render: () => (
        <a href={linkValue}>
          <Button type="link" size="small">
            Baixar PDF
          </Button>
        </a>
      ),
    },
  ];

  return (
    <div>
      <Table
        dataSource={registros}
        columns={columns}
        pagination={false}
        bordered
      />
      <Button
        type="primary"
        icon={<DownloadOutlined />}
        size={"large"}
        onClick={() => exportToExcel(registros)}
        style={{ marginTop: "1rem" }}
      >
        Baixar resultado
      </Button>
    </div>
  );
};
export default TabelaDinamica;
