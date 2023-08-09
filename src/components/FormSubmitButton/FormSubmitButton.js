function FormSubmitButton(props) {
    return (
        <button
            className={props.status ? "form-button" : 'form-button form-button_disabled'}
            type="submit">{props.text}
        </button>
    )
}

export default FormSubmitButton;