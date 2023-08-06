function ErrorSection(props) {

    return (
        <section className='error-section' >
            <p className="error-section__message">{props.message}</p>
        </section>
    );
}

export default ErrorSection;