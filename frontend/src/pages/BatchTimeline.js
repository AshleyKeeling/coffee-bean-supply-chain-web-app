import coffeeSupplyChain from '../assets/images/coffeeSupplyChain.png';
import BackButton from "../components/BackButton";
import TimelineCard from '../components/TimelineCard';

// icons
import cultivationIcon from '../assets/icons/cultivationIcon.png';
import harvestingIcon from '../assets/icons/harvestingIcon.png';
import processingIcon from '../assets/icons/processingIcon.png';
import dryingIcon from '../assets/icons/dryingIcon.png';
import exportingIcon from '../assets/icons/exportingIcon.png';
import roastingIcon from '../assets/icons/roastingIcon.png';
import packagingIcon from '../assets/icons/packagingIcon.png';
import distributionIcon from '../assets/icons/distributionIcon.png';
import { getBatchDetails, getBatchUpdates } from "../utils/BatchFactory";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams


const BatchTimeline = () => {
    const { smartContractAddress } = useParams(); // Get the contract address from the URL

    const [smartContractDetails, setSmartContractDetails] = useState("");
    const [smartContractUpdates, setSmartContractUpdates] = useState("");

    const getSmartContractData = async () => {
        const details = await getBatchDetails(smartContractAddress)
        setSmartContractDetails(details);

        const updates = await getBatchUpdates(smartContractAddress);
        setSmartContractUpdates(updates);

        console.log("herere" + smartContractAddress)
    }


    useEffect(() => {
        getSmartContractData();
        // eslint-disable-next-line 
    }, [smartContractAddress]);




    return (
        <div>
            <div className="main-content">
                <div className="row mt-3 g-0 align-items-center">
                    <span className="col-12 col-md-3">
                        <BackButton />
                    </span>
                    <h1 className="col-12 col-md-8 heading-1-size">Supply Chain: SC-0001-25</h1>
                </div>

                <div className="heading-4-size primary-colour text-md-center text-md-start">
                    <strong>Smart Contract Address:</strong>
                    <span style={{ fontWeight: "300", wordBreak: "break-word" }}>
                        0xABCDEF1234567890ABCDEF1234567890ABCDEF12
                    </span>
                </div>

                <div className="mt-3 row">
                    <h2>Track Your Coffee’s Journey</h2>
                    <div className="col-12 col-lg-6">
                        <p className="body-size">This batch timeline provides a detailed record of your coffee’s journey through the supply chain. Each stage—cultivation, harvesting, processing, and beyond—is securely recorded on the Ethereum blockchain, ensuring tamper-proof transparency. Ethereum’s decentralized network guarantees that it cannot be altered once data is recorded, making supply chain information trustworthy, verifiable and authentic—<a href="https://www.investopedia.com/terms/e/ethereum.asp" target="_blank" rel="noopener noreferrer" className="text-black"><strong>More information about Ethereum.</strong></a></p>
                        <p className='body-size'>By tracking your coffee here, you can see where it has been, who has handled it, and its status through the supply chain. This ensures authenticity, fair sourcing, and consumer trust in every batch.</p>

                        {/* TO BE MODIFIED TO ALLOW VALUES TO BE INSRTED */}
                        <p className='body-size'>This batch of <strong>520 Arabica coffee beans</strong> originated from <strong>Brazil</strong> and moved through the supply chain from <strong>01/01/2025</strong> to <strong>01/02/2025</strong>. It was processed using the <strong>dry/natural</strong> method and roasted to a <strong>light profile</strong> in <strong>London, UK</strong>. The supply chain stages were securely recorded on the <strong>Ethereum blockchain</strong> (SC-0001-25). The batch was delivered to retailers on 01/02/2025 for consumer purchase.</p>
                    </div>
                    <div className="col-12 col-lg-6">
                        <img src={coffeeSupplyChain} alt="three sections, coffee beans, plants, cofee" className='image-fluid rounded w-100' />
                    </div>
                </div>
            </div>
            <hr />
            <h2 className='text-center heading-2-size'>Timeline</h2>
            <div id='timeline-content'>

                {smartContractUpdates ? (
                    <ul>
                        <TimelineCard stageNumber={1} stageName={"Cultivation"} startDate={smartContractUpdates[0].timestamp} endDate={smartContractUpdates[1].timestamp} currentHolder={smartContractUpdates[1].current_holder} location={smartContractUpdates[1].location} status={smartContractUpdates[1].status} participantAddress={smartContractDetails[1].farmer} additionalNotes={smartContractUpdates[1].additional_notes} icon={cultivationIcon} />
                        <TimelineCard stageNumber={2} stageName={"Harvesting"} startDate={smartContractUpdates[1].timestamp} endDate={smartContractUpdates[2].timestamp} currentHolder={smartContractUpdates[2].current_holder} location={smartContractUpdates[2].location} status={smartContractUpdates[2].status} participantAddress={smartContractDetails[1].harvestor} additionalNotes={smartContractUpdates[2].additional_notes} icon={harvestingIcon} />
                        <TimelineCard stageNumber={3} stageName={"Processing"} startDate={smartContractUpdates[2].timestamp} endDate={smartContractUpdates[3].timestamp} currentHolder={smartContractUpdates[3].current_holder} location={smartContractUpdates[3].location} status={smartContractUpdates[3].status} participantAddress={smartContractDetails[1].processor} additionalNotes={smartContractUpdates[3].additional_notes} icon={processingIcon} />
                        <TimelineCard stageNumber={4} stageName={"Drying"} startDate={smartContractUpdates[3].timestamp} endDate={smartContractUpdates[4].timestamp} currentHolder={smartContractUpdates[4].current_holder} location={smartContractUpdates[4].location} status={smartContractUpdates[4].status} participantAddress={smartContractDetails[1].drying_specialist} additionalNotes={smartContractUpdates[4].additional_notes} icon={dryingIcon} />
                        <TimelineCard stageNumber={5} stageName={"Exporting"} startDate={smartContractUpdates[4].timestamp} endDate={smartContractUpdates[5].timestamp} currentHolder={smartContractUpdates[5].current_holder} location={smartContractUpdates[5].location} status={smartContractUpdates[5].status} participantAddress={smartContractDetails[1].exporter} additionalNotes={smartContractUpdates[5].additional_notes} icon={exportingIcon} />
                        <TimelineCard stageNumber={6} stageName={"Roasting"} startDate={smartContractUpdates[5].timestamp} endDate={smartContractUpdates[6].timestamp} currentHolder={smartContractUpdates[6].current_holder} location={smartContractUpdates[6].location} status={smartContractUpdates[6].status} participantAddress={smartContractDetails[1].roaster} additionalNotes={smartContractUpdates[6].additional_notes} icon={roastingIcon} />
                        <TimelineCard stageNumber={7} stageName={"Packaging"} startDate={smartContractUpdates[6].timestamp} endDate={smartContractUpdates[7].timestamp} currentHolder={smartContractUpdates[7].current_holder} location={smartContractUpdates[7].location} status={smartContractUpdates[7].status} participantAddress={smartContractDetails[1].packaging_specialist} additionalNotes={smartContractUpdates[7].additional_notes} icon={packagingIcon} />
                        <TimelineCard stageNumber={8} stageName={"Distribution"} startDate={smartContractUpdates[7].timestamp} endDate={smartContractUpdates[8].timestamp} currentHolder={smartContractUpdates[8].current_holder} location={smartContractUpdates[8].location} status={smartContractUpdates[8].status} participantAddress={smartContractDetails[1].distributor} additionalNotes={smartContractUpdates[8].additional_notes} icon={distributionIcon} />
                    </ul>
                ) : (<p>Invalid address/ID or No Updates available yet </p>)}

            </div>
        </div>
    )
}

export default BatchTimeline;