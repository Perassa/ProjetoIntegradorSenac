import Image from "next/image";

export default function Produto(props) {
    return (
        <div class="card" style={{width:"18rem"}}>
  <Image src={"/assets/bike-01"}width={286} height={200} /> 
  <div class="card-body">
    <h5 class="card-title">{props.nome}</h5>
    <p class="card-text">{props.descricao}
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
  <div class="card-body">
    <h3> R$ 7.999,99</h3>

    <p>Parcelas de 12x no cartão sem juros </p>
    <div>
    <Image src={"/assets/cartoes.png"}width={100} height={60} /> 
    </div>
  </div>
</div>
    )
}