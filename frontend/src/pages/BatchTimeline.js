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


const BatchTimeline = () => {
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
                <ul>
                    <TimelineCard stageNumber={1} stageName={"Cultivation"} date={"01/01/2025"} content={"The Harvester started the Harvesting stage on 06/01/2025 in Brazil. The batch’s status is ‘coffee beans collected’ and was finalised on 10/01/2025 at 11:15 AM GMT. The participant, identified by Ethereum address 0xabcdef1234567890abcdef1234567890, reported: ‘All coffee beans collected and ready for the next stage.’"} icon={cultivationIcon} />
                    <TimelineCard stageNumber={2} stageName={"Harvesting"} date={"01/01/2025"} content={"The Harvester started the Harvesting stage on 06/01/2025 in Brazil. The batch’s status is ‘coffee beans collected’ and was finalised on 10/01/2025 at 11:15 AM GMT. The participant, identified by Ethereum address 0xabcdef1234567890abcdef1234567890, reported: ‘All coffee beans collected and ready for the next stage.’"} icon={harvestingIcon} />
                    <TimelineCard stageNumber={3} stageName={"Processing"} date={"01/01/2025"} content={"The Harvester started the Harvesting stage on 06/01/2025 in Brazil. The batch’s status is ‘coffee beans collected’ and was finalised on 10/01/2025 at 11:15 AM GMT. The participant, identified by Ethereum address 0xabcdef1234567890abcdef1234567890, reported: ‘All coffee beans collected and ready for the next stage.’"} icon={processingIcon} />
                    <TimelineCard stageNumber={4} stageName={"Drying"} date={"01/01/2025"} content={"The Harvester started the Harvesting stage on 06/01/2025 in Brazil. The batch’s status is ‘coffee beans collected’ and was finalised on 10/01/2025 at 11:15 AM GMT. The participant, identified by Ethereum address 0xabcdef1234567890abcdef1234567890, reported: ‘All coffee beans collected and ready for the next stage.’"} icon={dryingIcon} />
                    <TimelineCard stageNumber={5} stageName={"Exporting"} date={"01/01/2025"} content={"The Harvester started the Harvesting stage on 06/01/2025 in Brazil. The batch’s status is ‘coffee beans collected’ and was finalised on 10/01/2025 at 11:15 AM GMT. The participant, identified by Ethereum address 0xabcdef1234567890abcdef1234567890, reported: ‘All coffee beans collected and ready for the next stage.’"} icon={exportingIcon} />
                    <TimelineCard stageNumber={6} stageName={"Roasting"} date={"01/01/2025"} content={"The Harvester started the Harvesting stage on 06/01/2025 in Brazil. The batch’s status is ‘coffee beans collected’ and was finalised on 10/01/2025 at 11:15 AM GMT. The participant, identified by Ethereum address 0xabcdef1234567890abcdef1234567890, reported: ‘All coffee beans collected and ready for the next stage.’"} icon={roastingIcon} />
                    <TimelineCard stageNumber={7} stageName={"Packaging"} date={"01/01/2025"} content={"The Harvester started the Harvesting stage on 06/01/2025 in Brazil. The batch’s status is ‘coffee beans collected’ and was finalised on 10/01/2025 at 11:15 AM GMT. The participant, identified by Ethereum address 0xabcdef1234567890abcdef1234567890, reported: ‘All coffee beans collected and ready for the next stage.’"} icon={packagingIcon} />
                    <TimelineCard stageNumber={8} stageName={"Distribution"} date={"01/01/2025"} content={"The Harvester started the Harvesting stage on 06/01/2025 in Brazil. The batch’s status is ‘coffee beans collected’ and was finalised on 10/01/2025 at 11:15 AM GMT. The participant, identified by Ethereum address 0xabcdef1234567890abcdef1234567890, reported: ‘All coffee beans collected and ready for the next stage.’"} icon={distributionIcon} />
                </ul>
            </div>
        </div>
    )
}

export default BatchTimeline;