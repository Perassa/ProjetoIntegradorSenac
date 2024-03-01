import Image from "next/image";

export default function Cabecalho(){
   return(<nav className="navbar navbar-expand-lg bg-custom "> 
   <div className="container-fluid">
     <a className="navbar-brand" href="#"> 
       <Image
         alt="Foto"
         src={"/assets/logo.png "}
         width={150}
         height={60}
       />
     </a>
     <button
       className="navbar-toggler"
       type="button"
       data-bs-toggle="collapse"
       data-bs-target="#navbarSupportedContent"
       aria-controls="navbarSupportedContent"
       aria-expanded="false"
       aria-label="Toggle navigation"
     >
       <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav me-auto mb-2 mb-lg-0 borda">
         <li className="nav-item">
           <a className="nav-link active" aria-current="page" href="#">
             Home
           </a>
         </li>
         <li className="nav-item">
           <a className="nav-link" href="#">

             Cadastro
           </a>
         </li>
       </ul>
       <form className="d-flex" role="search">
         <input
           className="form-control me-2"
           type="search"
           placeholder="Pesquisa"
           aria-label="Search"
         />
         <button className="btn btn-outline-success" type="submit">
           Busca
         </button>
       </form>
     </div>
   </div>
 </nav>)
}
