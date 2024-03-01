export default function CustomInputLabel(props){
    return (
        <div className={`col-md-${props.col} mb-3`}>
            <label className="form-label" htmlfor={props.id}>{props.texto}</label>
            <input className="form-control" id={props.id} type="text" />
        </div>
    )

}