function FormInput(props) {
    return (
        <>
            <label className="label" for={props.id}>{props.label}</label>
            <input className="input" name={props.id} id={props.id} placeholder={props.placeholder} type={props.type} />
        </>
    )
}

export default FormInput;