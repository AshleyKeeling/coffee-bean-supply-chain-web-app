import { Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import ParticipantBatchDetails from "../components/ParticipantBatchDetails";
import { useEffect, useState } from "react";
import { useAuthContext } from '../hooks/useAuthContext';
import { getBatchDetails, getBatchUpdates } from "../utils/BatchFactory";

const ParticipantDashboard = () => {
    const { user } = useAuthContext();

    const [batches, setBatches] = useState([]);
    const [batchDetails, setBatchDetails] = useState({}); // Stores smart contract data per batch

    // Fetch batches from the backend
    useEffect(() => {
        const getBatches = async () => {
            if (!user) return; // Ensures user exists before fetching

            const response = await fetch('/api/batch/all', {
                headers: { 'Authorization': `Bearer ${user.token}` }
            });

            if (response.ok) {
                const json = await response.json();
                setBatches(json);
            }
        };

        getBatches();
    }, [user]);

    // Fetch blockchain data for each batch
    useEffect(() => {
        const fetchSmartContractData = async () => {
            const newBatchDetails = {};

            await Promise.all(batches.map(async (batch) => {
                const details = await getBatchDetails(batch.smart_contract_address);
                const updates = await getBatchUpdates(batch.smart_contract_address);
                const latestUpdate = updates?.[updates.length - 1];
                const updatesLength = updates.length;

                newBatchDetails[batch.smart_contract_address] = {
                    details,
                    updatesLength,
                    latestUpdate
                };
            }));

            setBatchDetails(newBatchDetails);
        };

        if (batches.length > 0) {
            fetchSmartContractData();
        }
    }, [batches]);

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
                </InputGroup>
            </div>

            {/* Displays each batch grouped by the supply chains */}
            {Object.keys(groupedBatches).length > 0 ? (
                Object.keys(groupedBatches).map((supplyChainId) => (
                    <div key={supplyChainId} className="mb-4">
                        <h3 className="heading-3-size primary-colour">Supply Chain: {supplyChainId}</h3>
                        {groupedBatches[supplyChainId].map((batch) => {
                            const contractData = batchDetails[batch.smart_contract_address];

                            return contractData ? (
                                <ParticipantBatchDetails
                                    key={batch.smart_contract_address}
                                    // calculates progress between 0.0 and 1.0 depending on what stage the batch is upto.
                                    progress={((contractData.updatesLength - 1) / 8) / 1}
                                    batch={batch}
                                    status={contractData.latestUpdate?.status}
                                    batchQuantity={contractData.latestUpdate?.batch_quantity}
                                    creationDate={new Date(Number(contractData.details[0]?.creation_date) * 1000)
                                        .toLocaleString("en-GB", {
                                            day: "2-digit",
                                            month: "2-digit",
                                            year: "numeric",
                                            hour: "2-digit",
                                            minute: "2-digit",
                                            second: "2-digit",
                                            hour12: false, // Ensures 24-hour format
                                        })}
                                    latestUpdate={new Date(Number(contractData.latestUpdate?.timestamp) * 1000)
                                        .toLocaleString("en-GB", {
                                            day: "2-digit",
                                            month: "2-digit",
                                            year: "numeric",
                                            hour: "2-digit",
                                            minute: "2-digit",
                                            second: "2-digit",
                                            hour12: false, // Ensures 24-hour format
                                        })}
                                    previousCurrentHolder={contractData.latestUpdate?.current_holder}
                                    userRole={user.role}
                                />
                            ) : <p key={batch.smart_contract_address}>Loading batch data...</p>;
                        })}
                    </div>
                ))
            ) : (
                <p>No batches created yet</p>
            )}
        </div>
    );
};

export default ParticipantDashboard;