import Produto from "@/components/Produto";
import Cabecalho from "@/components/Cabecalho";
import axios from "axios";

import { useEffect, useState } from "react";
import Rodape from "@/components/Rodape";

export default function Home() {
  const [listaProduto, setListaProduto] = useState([]);
  const [listaProdutoFiltrado, setListaProdutoFiltrado] = useState([]) 

  useEffect(() => {
    axios
      .get("https://localhost:7282/api/Produto")
      .then((resp) => {
        setListaProduto(resp.data)
        setListaProdutoFiltrado(resp.data)
        //console.log(resp,listaProduto)
      });

  }, []);

  function handlePesquisar(filtro){
    const valorFiltro = filtro.target.value
 console.log(listaProduto)
    const filtrado = listaProduto.filter((dados) => dados.name.tolowerCase().includes(valorFiltro.tolowerCase()))
    
    setListaProdutoFiltrado(filtrado)
    console.log(filtro)
  }

  return (
    <>
      <Cabecalho pesquisar={handlePesquisar}/>
      <div className="container-fluid mt-3">
        <div className="row">
          {listaProdutoFiltrado.map((dado, index) => (
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
      <Rodape />
    </>
  );
}
