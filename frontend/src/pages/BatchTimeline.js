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
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';


const BatchTimeline = () => {
    const { smartContractAddress } = useParams(); // Get the contract address from the URL

    const [smartContractDetails, setSmartContractDetails] = useState("");
    const [smartContractUpdates, setSmartContractUpdates] = useState("");

    const getSmartContractData = async () => {
        const details = await getBatchDetails(smartContractAddress)
        setSmartContractDetails(details);

        const updates = await getBatchUpdates(smartContractAddress);
        setSmartContractUpdates(updates);

        console.log("herere" + await smartContractUpdates)
    }


    useEffect(() => {
        getSmartContractData();
        // eslint-disable-next-line 
    }, [smartContractAddress]);

    // calculates the duration of each stage(roundes it to 1 decimal) e.g. cultivation - 90.3
    // if that update hasnt happend yet the value is set to 0
    const stageDurationData = [
        { name: 'Cultivation', value: smartContractUpdates.length > 1 && smartContractUpdates.length > 0 ? ((Number(smartContractUpdates[1]?.timestamp - smartContractUpdates[0]?.timestamp) / 86400).toFixed(1)) : 0 },
        { name: 'Harvesting', value: smartContractUpdates.length > 2 && smartContractUpdates.length > 1 ? ((Number(smartContractUpdates[2]?.timestamp - smartContractUpdates[1]?.timestamp) / 86400).toFixed(1)) : 0 },
        { name: 'Processing', value: smartContractUpdates.length > 3 && smartContractUpdates.length > 2 ? ((Number(smartContractUpdates[3]?.timestamp - smartContractUpdates[2]?.timestamp) / 86400).toFixed(1)) : 0 },
        { name: 'Drying', value: smartContractUpdates.length > 4 && smartContractUpdates.length > 3 ? ((Number(smartContractUpdates[4]?.timestamp - smartContractUpdates[3]?.timestamp) / 86400).toFixed(1)) : 0 },
        { name: 'Exporting', value: smartContractUpdates.length > 5 && smartContractUpdates.length > 4 ? ((Number(smartContractUpdates[5]?.timestamp - smartContractUpdates[4]?.timestamp) / 86400).toFixed(1)) : 0 },
        { name: 'Roasting', value: smartContractUpdates.length > 6 && smartContractUpdates.length > 5 ? ((Number(smartContractUpdates[6]?.timestamp - smartContractUpdates[5]?.timestamp) / 86400).toFixed(1)) : 0 },
        { name: 'Packaging', value: smartContractUpdates.length > 7 && smartContractUpdates.length > 6 ? ((Number(smartContractUpdates[7]?.timestamp - smartContractUpdates[6]?.timestamp) / 86400).toFixed(1)) : 0 },
        { name: 'Distribution', value: smartContractUpdates.length > 8 && smartContractUpdates.length > 7 ? ((Number(smartContractUpdates[8]?.timestamp - smartContractUpdates[7]?.timestamp) / 86400).toFixed(1)) : 0 }
    ];

    // calculates the batch quanity at each stage
    // if that update hasnt happend yet the value is set to "no update"
    const batchQuantityData = [
        { name: 'Cultivation', value: smartContractUpdates.length > 1 ? Number(smartContractUpdates[1]?.batch_quantity) : "no update" },
        { name: 'Harvesting', value: smartContractUpdates.length > 2 ? Number(smartContractUpdates[2]?.batch_quantity) : "no update" },
        { name: 'Processing', value: smartContractUpdates.length > 3 ? Number(smartContractUpdates[3]?.batch_quantity) : "no update" },
        { name: 'Drying', value: smartContractUpdates.length > 4 ? Number(smartContractUpdates[4]?.batch_quantity) : "no update" },
        { name: 'Exporting', value: smartContractUpdates.length > 5 ? Number(smartContractUpdates[5]?.batch_quantity) : "no update" },
        { name: 'Roasting', value: smartContractUpdates.length > 6 ? Number(smartContractUpdates[6]?.batch_quantity) : "no update" },
        { name: 'Packaging', value: smartContractUpdates.length > 7 ? Number(smartContractUpdates[7]?.batch_quantity) : "no update" },
        { name: 'Distribution', value: smartContractUpdates.length > 8 ? Number(smartContractUpdates[8]?.batch_quantity) : "no update" }
    ];

    const stages = [
        { name: "Cultivation", key: "farmer", icon: cultivationIcon },
        { name: "Harvesting", key: "harvestor", icon: harvestingIcon },
        { name: "Processing", key: "processor", icon: processingIcon },
        { name: "Drying", key: "drying_specialist", icon: dryingIcon },
        { name: "Exporting", key: "exporter", icon: exportingIcon },
        { name: "Roasting", key: "roaster", icon: roastingIcon },
        { name: "Packaging", key: "packaging_specialist", icon: packagingIcon },
        { name: "Distribution", key: "distributor", icon: distributionIcon }
    ];

    const shortFormatTimestamp = (timestamp) => {
        return new Date(Number(timestamp) * 1000)
            .toLocaleString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
            });
    };


    return (
        <div>
            <div className="main-content">
                <div className="row mt-3 g-0 align-items-center">
                    <span className="col-12 col-md-3">
                        <BackButton />
                    </span>
                    <h1 className="col-12 col-md-8 heading-1-size">Supply Chain: xx-xx-xx</h1>
                </div>

                <div className="heading-4-size primary-colour text-md-center text-md-start">
                    <strong>Smart Contract Address:</strong>
                    <span style={{ fontWeight: "300", wordBreak: "break-word" }}>
                        {smartContractAddress}
                    </span>
                </div>

                <div className="mt-3 row">
                    <h2>Track Your Coffee’s Journey</h2>
                    <div className="col-12 col-lg-6">
                        <p className="body-size">This batch timeline provides a detailed record of your coffee’s journey through the supply chain. Each stage—cultivation, harvesting, processing, and beyond—is securely recorded on the Ethereum blockchain, ensuring tamper-proof transparency. Ethereum’s decentralized network guarantees that it cannot be altered once data is recorded, making supply chain information trustworthy, verifiable and authentic—<a href="https://www.investopedia.com/terms/e/ethereum.asp" target="_blank" rel="noopener noreferrer" className="text-black"><strong>More information about Ethereum.</strong></a></p>

                        <p className='body-size'>By tracking your coffee here, you can see where it has been, who has handled it, and its status through the supply chain. This ensures authenticity, fair sourcing, and consumer trust in every batch.</p>

                        {/* only displays if batch is complete */}
                        {smartContractUpdates == 9 ? (
                            <p className='body-size'>This batch of <strong>{smartContractUpdates[8]?.batch_quantity} Arabica coffee beans bags</strong> originated from <strong>{smartContractDetails[0]?.origin}</strong> and moved through the supply chain from <strong>{shortFormatTimestamp(smartContractDetails[0]?.creation_date)}</strong> to <strong>{shortFormatTimestamp(smartContractUpdates[smartContractUpdates.length - 1]?.timestamp)}</strong>. It was processed using the <strong>{smartContractDetails[0]?.processing_type}</strong> processing method and roasted to a <strong>{smartContractDetails[0]?.roasting_type} profile</strong> in <strong>{smartContractUpdates[6]?.location}</strong>. The supply chain stages were securely recorded on the <strong>Ethereum blockchain</strong>. The batch started with <strong>{smartContractUpdates[1]?.batch_quantity} </strong> bags and ended with <strong>{smartContractUpdates[8]?.batch_quantity} </strong> bags due to losses during the supply chain. The batch was delivered to retailers on <strong>{shortFormatTimestamp(smartContractUpdates[8]?.timestamp)}</strong> for consumer purchase.</p>
                        ) : (<p></p>)}

                    </div>
                    <div className="col-12 col-lg-6">
                        <img src={coffeeSupplyChain} alt="three sections, coffee beans, plants, cofee" className='image-fluid rounded w-100' />
                    </div>
                </div>
            </div>
            <hr />
            <h2 className='text-center heading-2-size'>Timeline</h2>
            <div id='timeline-content'>



                {smartContractUpdates?.length > 0 ? (
                    <ul>
                        {stages.map((stage, index) => {
                            if (index >= smartContractUpdates.length - 1) return null;  // Ensure we don't access out of bounds
                            return (
                                <TimelineCard
                                    key={index}
                                    stageNumber={index + 1}
                                    stageName={stage.name}
                                    startDate={smartContractUpdates[index]?.timestamp}
                                    endDate={smartContractUpdates[index + 1]?.timestamp}
                                    currentHolder={smartContractUpdates[index + 1]?.current_holder}
                                    location={smartContractUpdates[index + 1]?.location}
                                    status={smartContractUpdates[index + 1]?.status}
                                    participantAddress={smartContractDetails[1]?.[stage.key]}
                                    additionalNotes={smartContractUpdates[index + 1]?.additional_notes}
                                    icon={stage.icon}
                                />
                            );
                        })}
                    </ul>
                ) : (<p>Invalid address/ID or No Updates available yet</p>)}

                <div className="container mt-4 z-1 bg-white">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card p-3 shadow-sm">
                                <h2 className='text-center'>Supply Chain Stage Duration</h2>
                                <ResponsiveContainer width="100%" height={300}>
                                    <BarChart data={stageDurationData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" tick={{ angle: -90, textAnchor: 'end' }} height={90} interval={0} />
                                        <YAxis
                                            label={{
                                                value: 'Days',
                                                angle: -90,
                                                position: 'insideLeft',
                                                dy: 50
                                            }}
                                        />
                                        <Tooltip />
                                        <Bar dataKey="value" fill="#661A25" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="card p-3 shadow-sm">
                                <h2 className='text-center'>Batch Quantity During Supply Chain</h2>
                                <ResponsiveContainer width="100%" height={300}>
                                    <LineChart data={batchQuantityData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" angle={-90} textAnchor="end" interval={0} height={90} padding={{ right: 20 }} />                                        <YAxis
                                            label={{
                                                value: 'Quantity',
                                                angle: -90,
                                                position: 'insideLeft',
                                                dy: 50
                                            }}
                                        />
                                        <Tooltip />
                                        <Line type="monotone" dataKey="value" stroke="#661A25" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default BatchTimeline;