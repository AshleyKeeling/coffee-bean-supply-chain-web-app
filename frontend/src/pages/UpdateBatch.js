import BackButton from "../components/BackButton";
import { useEffect, useState } from "react";
import { useNewBatch } from "../hooks/useNewBatch";
import { useLocation } from 'react-router-dom';
import React from "react";
import { getBatchDetails, getBatchUpdates, updateBatch } from "../utils/BatchFactory";
import { useAuthContext } from '../hooks/useAuthContext';

const UpdateBatch = () => {
    const [currentLocation, setCurrentLocation] = useState('');
    const [status, setStatus] = useState('');
    const [additionalNotes, setAdditionalNotes] = useState('');

    // smart contract data
    const [smartContractDetails, setSmartContractDetails] = useState("");
    const [latestSmartContractUpdate, setLatestSmartContractUpdate] = useState("");


    const { error, isLoading } = useNewBatch();

    const location = useLocation();
    const batch = location.state?.batch;
    const { user } = useAuthContext();

    const [isOpen, setIsOpen] = useState(false);


    const getSmartContractData = async (smart_contract_address) => {
        const details = await getBatchDetails(smart_contract_address)
        setSmartContractDetails(details[0]);

        const updates = await getBatchUpdates(smart_contract_address);
        setLatestSmartContractUpdate(updates[updates.length - 1]);
    }

    // gets smart contract data for this batch
    useEffect(() => {
        getSmartContractData(batch.smart_contract_address)
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(batch)
        updateBatch(
            batch.smart_contract_address,
            latestSmartContractUpdate.batch_quantity,
            currentLocation,
            user.role,
            "previous_stage",
            "next_stage",
            status,
            additionalNotes
        )
        alert("current location: " + currentLocation + "\nstatus: " + status + "\nadditional notes: " + additionalNotes)
    }

    const longFormatTimestamp = (timestamp) => {
        return new Date(Number(timestamp) * 1000)
            .toLocaleString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false, // Ensures 24-hour format
            });
    };

    return (
        <div className="main-content">
            <div className="row mt-5 g-0 align-items-center">
                <span className="col-12 col-md-3">
                    <BackButton />
                </span>
                <h1 className="col-12 col-md-8 heading-1-size">Supply Chain: {batch.supply_chain_id}</h1>
            </div>
            <div className="heading-4-size primary-colour mb-4">
                <strong>Smart Contract Address:</strong>
                <span style={{ fontWeight: "300", wordBreak: "break-word" }}>
                    {batch.smart_contract_address}
                </span>
            </div>

            <div className="primary-bg text-white rounded p-4">
                <h2 className="heading-2-size">Batch Details</h2>

                <div class="row mt-3">
                    <div class="col-12">
                        <h5 class="text-white heading-3-size">Current Batch Details</h5>
                    </div>
                    <div class="col-6 col-md-6">
                        <ul class="text-white list-unstyled heading-4-size">
                            <li>Creation date: <span style={{ fontWeight: "200", wordBreak: "break-word" }}>{longFormatTimestamp(smartContractDetails.creation_date)}</span></li>
                            <li>Bean type: <span style={{ fontWeight: "200", wordBreak: "break-word" }}>{smartContractDetails.bean_type}</span></li>
                            <li>Origin: <span style={{ fontWeight: "200", wordBreak: "break-word" }}>{smartContractDetails.origin}</span></li>
                            <li>Batch quantity: <span style={{ fontWeight: "200", wordBreak: "break-word" }}>{latestSmartContractUpdate.batch_quantity}</span></li>
                            <li>Processing type: <span style={{ fontWeight: "200", wordBreak: "break-word" }}>{smartContractDetails.processing_type}</span></li>
                            <li>Roasting type: <span style={{ fontWeight: "200", wordBreak: "break-word" }}>{smartContractDetails.roasting_type}</span></li>
                            <li>Latest update: <span style={{ fontWeight: "200", wordBreak: "break-word" }}>{longFormatTimestamp(latestSmartContractUpdate.timestamp)}</span></li>
                        </ul>
                    </div>
                    <div class="col-6 col-md-6">
                        <ul class="text-white list-unstyled heading-4-size">
                            <li>Current holder: <span style={{ fontWeight: "200", wordBreak: "break-word" }}>{latestSmartContractUpdate.current_holder}</span></li>
                            <li>Previous stage: <span style={{ fontWeight: "200", wordBreak: "break-word" }}>{latestSmartContractUpdate.previous_stage}</span></li>
                            <li>Next stage: <span style={{ fontWeight: "200", wordBreak: "break-word" }}>{latestSmartContractUpdate.next_stage}</span></li>
                            <li>Current location: <span style={{ fontWeight: "200", wordBreak: "break-word" }}>{latestSmartContractUpdate.location}</span></li>
                            <li>Status: <span style={{ fontWeight: "200", wordBreak: "break-word" }}>{latestSmartContractUpdate.status}</span></li>
                            <li>Additional notes: <span style={{ fontWeight: "200", wordBreak: "break-word" }}>{latestSmartContractUpdate.additional_notes}</span></li>
                        </ul>
                    </div>
                </div>

                <hr style={{ border: "none", borderTop: "2px solid white", opacity: 1 }} className="mx-3" />

                <div class="row mt-3">
                    <div class="col-12">
                        <h5 class="text-white heading-3-size">Updated Batch Details</h5>
                    </div>
                    <div class="col-6 col-md-6">
                        <ul class="text-white list-unstyled heading-4-size">
                            <li>Bean type: <span style={{ fontWeight: "200", wordBreak: "break-word" }}>{smartContractDetails.bean_type}</span></li>
                            <li>Origin: <span style={{ fontWeight: "200", wordBreak: "break-word" }}>{smartContractDetails.origin}</span></li>
                            <li>Batch quantity: <span style={{ fontWeight: "200", wordBreak: "break-word" }}>{latestSmartContractUpdate.batch_quantity}</span></li>
                            <li>Processing type: <span style={{ fontWeight: "200", wordBreak: "break-word" }}>{smartContractDetails.processing_type}</span></li>
                            <li>Roasting type: <span style={{ fontWeight: "200", wordBreak: "break-word" }}>{smartContractDetails.roasting_type}</span></li>
                            <li>Latest update: <span style={{ fontWeight: "200", wordBreak: "break-word" }}>{longFormatTimestamp(Date.now() / 1000)}</span></li>
                        </ul>
                    </div>
                    <div class="col-6 col-md-6">
                        <ul class="text-white list-unstyled heading-4-size">
                            <li>Current holder: <span style={{ fontWeight: "200", wordBreak: "break-word" }}>{user.role}</span></li>
                            <li>Previous stage: <span style={{ fontWeight: "200", wordBreak: "break-word" }}>-- dummy text --</span></li>
                            <li>Next stage: <span style={{ fontWeight: "200", wordBreak: "break-word" }}>-- dummy text --</span></li>
                            <li>Current location: <span style={{ fontWeight: "200", wordBreak: "break-word" }}>{currentLocation}</span></li>
                            <li>Status: <span style={{ fontWeight: "200", wordBreak: "break-word" }}>{status}</span></li>
                            <li>Additional notes: <span style={{ fontWeight: "200", wordBreak: "break-word" }}>{additionalNotes}</span></li>
                        </ul>
                    </div>
                </div>

                <form className="" id="" onSubmit={handleSubmit}>
                    <div className="row">
                        <div>
                            <label className="heading-4-size">Current location</label>
                            <input
                                type="text"
                                onChange={(e) => setCurrentLocation(e.target.value)}
                                value={currentLocation}
                                className="form-control mb-3"
                                placeholder="e.g Brazil"
                            />
                        </div>

                        <div className="">
                            <label className="heading-4-size">Status</label>
                            <input
                                type="text"
                                onChange={(e) => setStatus(e.target.value)}
                                value={status}
                                className="form-control mb-3"
                                placeholder="e.g All crops planted..."
                            />
                        </div>

                        <div className="">
                            <label className="heading-4-size">Additional notes</label>
                            <input
                                type="text"
                                onChange={(e) => setAdditionalNotes(e.target.value)}
                                value={additionalNotes}
                                className="form-control mb-3 pb-5"
                                placeholder="e.g All crops planted successfully with no issues."
                            />
                        </div>

                    </div>

                    <input
                        type="checkbox"
                        checked={isOpen}
                        className="form-check-input"
                        onChange={(e) => setIsOpen(e.target.checked)}
                    />
                    <label className="body-size">Reduce Quantity?</label>
                    {isOpen && (
                        <table className="w-100 tertiary-bg rounded text-white body-size products-table p-2 mt-3 mt-lg-0">
                            <thead>
                                <tr>
                                    <th><strong>Product ID</strong></th>
                                    <th><strong>Status</strong></th>
                                </tr>
                            </thead>
                            <tbody>
                                {batch.products ? (
                                    batch.products.map((product, index) => (
                                        <React.Fragment key={index}>
                                            <tr style={{ fontWeight: "300", wordBreak: "break-word" }}>
                                                <td>{product.product_id}</td>
                                                <td>{product.status}</td>
                                            </tr>
                                            <tr>
                                                <td colSpan="2">
                                                    <hr style={{ border: "none", borderTop: "2px solid white", opacity: 1 }} />
                                                </td>
                                            </tr>
                                        </React.Fragment>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="2" className="text-center">No products</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    )}
                    <hr style={{ border: "none", borderTop: "2px solid white", opacity: 1 }} className="mx-3" />


                    <button disabled={isLoading} className="button border-0 tertiary-bg text-white rounded text-center py-3 w-100">Update Batch</button>
                    {error && <div className="error">{error}</div>}
                </form>
            </div>

        </div>
    )
}

export default UpdateBatch;