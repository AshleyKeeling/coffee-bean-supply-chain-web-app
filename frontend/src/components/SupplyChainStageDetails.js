const SupplyChainStageDetails = ({ number, imageSRC, imageALT, stageName, description }) => {
    return (

        // condition - alternates the colum order for every even and odd number.
        <div className={`row ${number % 2 === 0 ? 'flex-row-reverse' : ''}`} id={"stage" + number}>
            <div className="col-12 col-md-8 my-3">
                <span className="heading-3-size">{number} - {stageName}</span>
                <p className="body-size">{description}</p>
            </div>
            <div className="col-12 col-md-4">
                <img src={imageSRC} alt={imageALT} className="img-fluid rounded stage-deatails-image" style={{ width: "100%", aspectRatio: "43/23", objectFit: "cover", height: "auto", display: "block" }} />
            </div>
        </div>
    );
};

export default SupplyChainStageDetails;