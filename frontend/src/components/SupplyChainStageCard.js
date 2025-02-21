import { HashLink as Link } from "react-router-hash-link";

const SupplyChainStageCard = ({ number, imageSRC, imageALT, stageName }) => {
    return (
        <div className="supply-chain-card bg-white border rounded shadow p-1 p-md-2">
            <Link to={`/supplyChainOverviewPage#stage${number}`} className="text-decoration-none" smooth>

                {/* Number in the top-left corner */}
                <span className="stage-number heading-3-size px-2">{number}</span>

                {/* Stage Image */}
                <img src={imageSRC} alt={imageALT} className="stage-image rounded " />

                {/* Stage Name */}
                <span className="stage-name ">{stageName}</span>
            </Link>

        </div>
    );
};

export default SupplyChainStageCard;