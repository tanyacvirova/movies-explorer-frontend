function ExtraSection(props) {

    return (
        <section className="extra-section">
            {(props.isVisible) && <button className="extra-section__button" type="button" onClick={props.onMoreMovies}>Ещё</button>}
        </section>
    );
}

export default ExtraSection;