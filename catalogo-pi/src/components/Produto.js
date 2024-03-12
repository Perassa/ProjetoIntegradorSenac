import Image from "next/image";

export default function Produto(props) {
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xxl-3 mb-3 ">
      <div className="card h-100 " style={{ width: "18rem" }}>
        <img alt="Foto" src={props.imagem} width={286} height={200} />
        <div className="card-body">
          <h5 className="card-title ">{props.name}</h5>
          <p className="card-text">{props.descricao}</p>
        </div>
        <div className="d-flex justify-content-between aling-items-center">
          {props.disponivel == false ? (
            <span className="badge text-bg-secondary">Indisponível</span>
          ) : null}
          {props.novidade == true ? (
            <span className="badge text-bg-success">Novidade</span>
          ) : null}
        </div>
        <div className="card-body">
          {props.precoPromocional > 0 ? (
            <Image
              alt="Foto"
              src={"/assets/Promocao.gif"}
              width={100}
              height={70}
            />
          ) : null}
          {props.precoPromocional > 0 ? (
            <>
              <h3>
                <s>
                  {Intl.NumberFormat("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  }).format(props.preco)}
                </s>
              </h3>
              <h3>
                {Intl.NumberFormat("pt-br", {
                  style: "currency",
                  currency: "BRL",
                }).format(props.precoPromocional)}
              </h3>
            </>
          ) : (
            <h3>
              {Intl.NumberFormat("pt-br", {
                style: "currency",
                currency: "BRL",
              }).format(props.preco)}
            </h3>
          )}
          
          
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
