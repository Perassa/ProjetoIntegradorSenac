import Image from "next/image";

export default function Produto() {
    return (
        <div class="card" style={{width:"18rem"}}>
  <Image src={"/assets/bike-01"}width={286} height={200} /> 
  <div class="card-body">
    <h5 class="card-title">BICICLETA CALOI ELITE</h5>
    <p class="card-text">Essa mountain bike aro 29 caloi, conta com câmbios Shimano Deore M6100 12v, freios a disco hidráulicos e suspensão Rockshox RS Judy Silver R29 com trava no guidão.
Se você busca ingressar nas competições e está em dúvida sobre qual a melhor mtb ou qual a mountain bike aro 29 shimano com melhor custo benefício, a caloi elite  é a escolha ideal. Com essa bicicleta você vai ter a melhor experiência nas trilhas e competições.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"> Novidade</li>
    <li class="list-group-item"> Disponível</li>
    
  </ul>
  <div class="card-body">
    <h3> R$ 7.999,99</h3>
  </div>
</div>
    )
}