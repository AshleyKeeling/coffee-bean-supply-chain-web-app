const SupplyChainStageCard = ({ number, imageSRC, imageALT, stageName }) => {
    return (
        <div className="supply-chain-card bg-white border rounded shadow p-1 p-md-2">
            {/* Number in the top-left corner */}
            <span className="stage-number heading-3-size px-2">{number}</span>

            {/* Stage Image */}
            <img src={imageSRC} alt={imageALT} className="stage-image" />

            {/* Stage Name */}
            <span className="stage-name">{stageName}</span>
        </div>
    );
};

export default SupplyChainStageCard;