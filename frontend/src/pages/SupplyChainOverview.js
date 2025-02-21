import React, { useState } from "react";

import SupplyChainStageDetails from "../components/SupplyChainStageDetails";

// json
import supplyChainDataJSON from "../assets/json/supplyChainOverviewDetails.json";


const SupplyChainOverview = () => {

    const [supplyChainStagesData] = useState(supplyChainDataJSON);

    // creates 'supply chain stage details' for each stage from json file
    const supplyChainData = supplyChainStagesData.stages.map((stage, index) => (
        <SupplyChainStageDetails
            key={index}
            number={index + 1}
            imageSRC={require(`../assets/images/${stage.image}`)}
            imageALT="alt"
            stageName={stage.name}
            description={stage.description}
        />
    ));

    return (
        <div className="main-content mb-4">
            <h1 className="heading-1-size my-3">Supply Chain Overview</h1>
            {supplyChainData}
        </div>
    )
}

export default SupplyChainOverview;