function FormInput(props) {
    return (
        <>
            <label className="label" >{props.label}</label>
            <input className="input"
                name={props.id}
                id={props.id}
                // placeholder={props.placeholder}
                type={props.type}
                value={props.value}
                onChange={props.onInputChange}
                minLength={(props.id === 'name') ? 2 : ''}
                maxLength={(props.id === 'name') ? 30 : ''}
                required />
            <span className="error">{props.errorMessage}</span>
        </>
    )
}

export default FormInput;