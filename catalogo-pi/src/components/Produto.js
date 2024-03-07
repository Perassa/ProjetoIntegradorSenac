import Image from "next/image";

export default function Produto(props) {
  return (
    <div className="col-lg-3 mb-3 ">
      <div className="card h-100 " style={{ width: "18rem" }}>
        <img alt="Foto" src={props.imagem} width={286} height={200} />
        <div className="card-body">
          <h5 className="card-title">{props.nome}</h5>
          <p className="card-text">{props.descricao}</p>
        </div>
        <div className="d-flex justify-content-between aling-items-center">
          {props.Disponível == false ? (
            <span className="badge text-bg-secondary">Indisponível</span>
          ) : null}

          <span className="badge text-bg-secondary">Indisponível</span>
          <span className="badge text-bg-success">Novidade</span>
        </div>
        <div className="card-body">
          {props.novidade == true ? (
            <Image
              alt="Foto"
              src={"/assets/Promocao.gif"}
              width={100}
              height={70}
            />
          ) : null}
          {props.precoPromocional > 0 ? (
            <h3>
              {" "}
              <s>R$ {props.precoPromocional}</s>
            </h3>
          ) : null}
          <h3> R$ {props.preco}</h3>

          <p>Parcelas de 12x no cartão sem juros </p>
          <div>
            <Image
              alt="Foto"
              src={"/assets/cartoes.png"}
              width={100}
              height={60}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
