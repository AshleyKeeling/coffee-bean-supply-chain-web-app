const WhatIsProvidedCard = ({ SRC, ALT, heading, content }) => {
    return (
        <div className="secondary-bg rounded what-is-provided-card h-100 d-flex flex-column">
            <img src={SRC} alt={ALT} className="img-fluid rounded " />
            <span className="tertiary-colour heading-4-size">{heading}</span>
            <p className="text-white px-2 body-size">{content}</p>
        </div>
    )
}

export default WhatIsProvidedCard;