function ExtraSection() {
    const currentLocation = window.location.pathname;

    return (
        <section className="extra-section">
            {(currentLocation === '/movies') && <button className="extra-section__button" type="button">Ещё</button>}
        </section>
    );
}

export default ExtraSection;