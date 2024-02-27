import Image from "next/image";

export default function Produto(props) {
    return (
      <div className="col-3">
        
      
        <div className="card" style={{width:"18rem"}}>
  <Image alt="Foto" src={"/assets/bike-01"}width={286} height={200} /> 
  <div className="card-body">
    <h5 className="card-title">{props.nome}</h5>
    <p className="card-text">{props.descricao}
</p>
  </div>
  <div className="d-flex justify-content-between aling-items-center">
    {
      props.Disponível == false
      ? <span className="badge text-bg-secondary">Indisponível</span>
      :null
    }
    {
      props.novidade == true
      ? <span className=""></span>
      :null
    }
    <span className="badge text-bg-secondary">Indisponível</span>
    <span className="badge text-bg-success">Novidade</span>
  </div>
  <div className="card-body">
    <h3> R$ 7.999,99</h3>

    <p>Parcelas de 12x no cartão sem juros </p>
    <div>
    <Image alt="Foto" src={"/assets/cartoes.png"}width={100} height={60} /> 
    </div>
  </div>
</div>
</div>
    )
}