import Produto from "@/components/Produto";
import Cabecalho from "@/components/Cabecalho";
import axios from "axios";

import { useEffect, useState } from "react";

export default function Home() {
  const [listaProduto, setListaProduto] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:7282/api/Produto")
      .then((resp) => setListaProduto(resp.data));
  }, []);

  return (
    <>
      <Cabecalho/>
      <div className="container-fluid mt-3">
        <div className="row">
          {listaProduto.map((dado, index) => (
            <Produto
            precoPromocional={dado.precoPromocional}
            imagem={dado.imagem}
              key={index}
              nome={dado.nome}
              descricao={dado.descricao}
              disponivel={dado.disponivel}
              novidade={dado.novidade}
              preco={dado.preco}
            />
          ))}
        </div>
      </div>
    </>
  );
}
