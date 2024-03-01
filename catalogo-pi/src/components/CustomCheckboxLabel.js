export default function CustomCheckBoxLabel(props){
    return (
        <div className={`col-md-${props.col} mb-3`}>
        <input className="form-check-input" id={props.id} type="checkbox" />
        <label className="form-check-label" htmlFor={props.id}>{props.texto}</label>          
      </div>  
        )
       
    }
 
