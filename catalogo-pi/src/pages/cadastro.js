import CustomCheckBoxLabel from "@/components/CustomCheckboxLabel";
import CustomInputLabel from "@/components/CustomInputLabel";
import CustomTextAreaLabel from "@/components/CustomTextAreaLabel";
import Cabecalho from "@/components/Cabecalho";
import axios from "axios";
import { useState } from "react";
import Rodape from "@/components/Rodape";
import { useRouter } from "next/router";

export default function cadastro(){
    const router = useRouter()

    const [dadosProduto, setDadosProduto] = useState({
                                                      id : 0,
                                                      nome : "",
                                                      descricao : "",
                                                      preco: 0,
                                                      novidade: true,
                                                      disponivel: true
    })
    
    function handleSalvar()
    {
        //Enviaremos o post para a API
        axios.post("https://localhost:7282/api/Produto", dadosProduto)
            .then(res => {
                console.log(res)
                router.push("/")}
                )
    }
   
 
function handleChange(e){
   // console.log(e.target.value)
   // console.log(e.target.id)

   if (e.target.type == "checkbox")
   {
      dadosProduto[e.target.id] = e.target.checked
   } else{
      dadosProduto[e.target.id] = e.target.value
   }

    setDadosProduto(dadosProduto)

    console.log (dadosProduto) 
    
}

    return (
        <>
        <Cabecalho/>
        <div className="container-fluid">
            <div className="row">
               <CustomInputLabel id="name" onChange={handleChange} texto="nome" col="8" />
               <CustomInputLabel id="preco"onChange={handleChange} texto="preço" col="4" />
               <CustomTextAreaLabel id="descricao"onChange={handleChange} texto="Descrição" col="12"/>
               <CustomInputLabel id="imagem"onChange={handleChange} texto="URL da Imagem" col="12"/>  
               <CustomCheckBoxLabel id="novidade"onChange={handleChange} texto="Novidade" col="6"/>  
               <CustomCheckBoxLabel id="disponivel"onChange={handleChange} texto="Disponivel" col="6"/>  
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <button className="btn btn-primary" onClick={handleSalvar}>Salvar</button>
                </div>
            </div>
        </div>
        <Rodape></Rodape>
        
        </>
        

    )
}