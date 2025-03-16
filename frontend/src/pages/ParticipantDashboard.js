import { Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
// import { Link } from "react-router-dom";
import ParticipantBatchDetails from "../components/ParticipantBatchDetails";
import { useEffect, useState } from "react";
import { useAuthContext } from '../hooks/useAuthContext';
import { getBatchDetails, getBatchUpdates } from "../utils/BatchFactory";


const ParticipantDashboard = () => {
    const [smartContractDetails, setSmartContractDetails] = useState("");
    const [latestSmartContractUpdate, setLatestSmartContractUpdate] = useState("");

    const { user } = useAuthContext();

    const [batches, setBatches] = useState([]);

    const getSmartContractData = async () => {
        const details = await getBatchDetails("0xe7f1725e7734ce288f8367e1bb143e90bb3f0512")
        setSmartContractDetails(details);

        const updates = await getBatchUpdates("0xe7f1725e7734ce288f8367e1bb143e90bb3f0512");
        setLatestSmartContractUpdate(updates[updates.length - 1]);
    }

    useEffect(() => {
        const getBatches = async () => {
            if (!user) return; // Ensures user exists before fetching

            const response = await fetch('/api/batch/all', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            const json = await response.json();

            if (response.ok) {
                console.log(json)
                setBatches(json);
            }
        };

        getBatches();

        getSmartContractData();

        console.log("smart contract data:" + smartContractDetails + "\nLatest update:" + latestSmartContractUpdate + "\nBatch details: ")
    }, [user]);

    // Group batches by supply_chain_id
    const groupedBatches = batches.reduce((acc, batch) => {
        if (!acc[batch.supply_chain_id]) {
            acc[batch.supply_chain_id] = [];
        }
        acc[batch.supply_chain_id].push(batch);
        return acc;
    }, {});


    return (
        <div className="main-content">
            <h1 className="col-12 col-md-8 heading-2-size mt-4">Welcome {user.email}</h1>
            <div className="heading-4-size primary-colour mb-4">
                <strong>Ethereum Address:</strong>
                <span style={{ fontWeight: "300", wordBreak: "break-word" }}>
                    {user.ethereum_address}
                </span>
            </div>

            <div className="">
                <InputGroup>
                    <InputGroup.Text>
                        <FaSearch />
                    </InputGroup.Text>
                    <Form.Control
                        type="text"
                        placeholder="Search smart contract address or supply chain ID..."
                        className="border-start-0 py-3"
                    />
                    {/* <Button variant="dark" style={{ backgroundColor: "#661A25", border: "none", borderRadius: "5px" }} className='px-5'>
                            <Link to="/batchTimeline" className="text-decoration-none text-white">Search</Link>
                        </Button> */}
                </InputGroup>
            </div>


            {/* Displays each batch grouped by the supply chains */}
            {Object.keys(groupedBatches).length > 0 ? (
                Object.keys(groupedBatches).map((supplyChainId) => (
                    <div key={supplyChainId} className="mb-4">
                        <h3 className="heading-3-size primary-colour">Supply Chain: {supplyChainId}</h3>
                        {groupedBatches[supplyChainId].map((batch) => (
                            < ParticipantBatchDetails
                                key={batch.smart_contract_address}
                                batch={batch}
                                status={latestSmartContractUpdate.status}
                                batchQuantity={latestSmartContractUpdate.batch_quantity}
                                creationDate={new Date(Number(smartContractDetails[0].creation_date) * 1000)
                                    .toLocaleString("en-GB", {
                                        day: "2-digit",
                                        month: "2-digit",
                                        year: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                        second: "2-digit",
                                        hour12: false, // Ensures 24-hour format
                                    })}
                                latestUpdate={new Date(Number(latestSmartContractUpdate.timestamp) * 1000)
                                    .toLocaleString("en-GB", {
                                        day: "2-digit",
                                        month: "2-digit",
                                        year: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                        second: "2-digit",
                                        hour12: false, // Ensures 24-hour format
                                    })}
                            />
                        ))}
                    </div>
                ))
            ) : (
                <p>No batches created yet</p>
            )}


        </div>
    )
}

export default ParticipantDashboard;