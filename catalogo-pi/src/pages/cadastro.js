import CustomCheckBoxLabel from "@/components/CustomCheckboxLabel";
import CustomInputLabel from "@/components/CustomInputLabel";
import CustomTextAreaLabel from "@/components/CustomTextAreaLabel";
import Cabecalho from "@/components/Cabecalho";
import axios from "axios";

export default function cadastro(){

    const [dadosProduto, setDadosProduto] = useState({})

function handleSalvar()
{
    //Enviaremos o post para a API
    axios.post("https://localhost:7282/api/Produto", dadosproduto)
    .then(res => console.log(res))
}

    return (
        <>
        <Cabecalho/>
        <div className="container-fluid">
            <div className="row">
               <CustomInputLabel id="nome" texto="nome" col="8" />
               <CustomInputLabel id="preco" texto="preço" col="4" />
               <CustomTextAreaLabel id="descricao" texto="Descrição" col="12"/>
               <CustomInputLabel id="imagem" texto="URL da Imagem" col="12"/>  
               <CustomCheckBoxLabel id="novidade" texto="Novidade" col="6"/>  
               <CustomCheckBoxLabel id="disponivel" texto="Disponivel" col="6"/>  
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <button className="btn btn-primary" onClick={handleSalvar}>Salvar</button>
                </div>
            </div>
        </div>
        
        </>
        

    )
}