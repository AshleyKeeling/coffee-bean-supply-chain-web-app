import { Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthContext } from '../hooks/useAuthContext';
import { getBatchDetails, getBatchUpdates } from "../utils/BatchFactory";
import ManagerBatchDetails from "../components/ManagerBatchDetails";

const ManagerDashboard = () => {
    const [batches, setBatches] = useState([]);
    const [batchDetails, setBatchDetails] = useState({}); // Stores smart contract data per batch

    const { user } = useAuthContext();
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
                try {
                    const details = await getBatchDetails(batch.smart_contract_address);
                    const updates = await getBatchUpdates(batch.smart_contract_address);
                    const latestUpdate = updates?.length ? updates[updates.length - 1] : "No updates yet";
                    const updatesLength = updates.length;
                    newBatchDetails[batch.smart_contract_address] = {
                        details,
                        updatesLength,
                        latestUpdate
                    };
                } catch (error) {
                    console.error("Error fetching batch data:", error);
                }
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

            <div className="row g-2 mb-2">
                <Link to="newBatch" className="text-decoration-none col-12 col-md-6 col-lg-3">
                    <div className="button border primary-bg text-white rounded text-center py-3 w-100">
                        <span className="mx-2">New Batch</span>
                    </div>
                </Link>

                <Link to="newSupplyChain" className="text-decoration-none col-12 col-md-6 col-lg-3">
                    <div className="button border primary-bg text-white rounded text-center py-3 w-100">
                        <span className="mx-2">New Supply Chain</span>
                    </div>
                </Link>

                <div className="col-12 col-lg-6">
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
            </div>

            {/* Displays each batch grouped by the supply chains */}
            {Object.keys(groupedBatches).length > 0 ? (
                Object.keys(groupedBatches).map((supplyChainId) => (
                    <div key={supplyChainId} className="mb-4">
                        <h3 className="heading-3-size primary-colour">Supply Chain: {supplyChainId}</h3>
                        {groupedBatches[supplyChainId].map((batch) => {
                            const contractData = batchDetails[batch.smart_contract_address];
                            return contractData ? (
                                <ManagerBatchDetails
                                    key={batch.smart_contract_address}
                                    // calculates progress between 0.0 and 1.0 depending on what stage the batch is upto.
                                    progress={((contractData.updatesLength - 1) / 8) / 1}
                                    smartContractAddress={batch.smart_contract_address}
                                    smartContractDetails={contractData.details[0]}
                                    smartContractLatestUpdate={contractData.latestUpdate}
                                    products={batch.products}
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

export default ManagerDashboard;