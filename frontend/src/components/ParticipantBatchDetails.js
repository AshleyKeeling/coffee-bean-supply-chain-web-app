import { Link } from "react-router-dom";
import React from 'react';

const ParticipantBatchDetails = ({ batch, status, batchQuantity, creationDate, latestUpdate }) => {

    return (
        <div className="primary-bg rounded p-2 mb-2">
            <div className="row">
                <div className="col-12 col-md-8 mb-2">
                    {/* progress bar */}
                    <progress value={0.5} />

                    {/* smart contract address */}
                    <div className="body-size text-white">
                        <strong>Smart Contract Address: </strong>
                        <span style={{ fontWeight: "200", wordBreak: "break-word" }}>
                            {batch.smart_contract_address}
                        </span>
                    </div>

                    {/* Status */}
                    <div className="body-size text-white">
                        <strong>Status: </strong>
                        <span style={{ fontWeight: "200", wordBreak: "break-word" }}>
                            {status}
                        </span>
                    </div>

                    {/* Batch Quantity */}
                    <div className="body-size text-white">
                        <strong>Batch Quantity: </strong>
                        <span style={{ fontWeight: "200", wordBreak: "break-word" }}>
                            {batchQuantity}
                        </span>
                    </div>

                    {/* Creation Date */}
                    <div className="body-size text-white">
                        <strong>Creation Date: </strong>
                        <span style={{ fontWeight: "200", wordBreak: "break-word" }}>
                            {creationDate}
                        </span>
                    </div>

                    {/* latest update */}
                    <div className="body-size text-white">
                        <strong>Latest Update: </strong>
                        <span style={{ fontWeight: "200", wordBreak: "break-word" }}>
                            {/* 09/02/2025, 17:06:32 */}
                            {latestUpdate}
                        </span>
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-center col-12 col-md-4 col-lg-4">
                    {console.log(batch)}
                    <Link
                        to="updateBatch"
                        state={{ batch }}
                        className="text-decoration-none"
                    >
                        <div className="button tertiary-bg text-white rounded text-center py-3 w-100 mb-2">
                            <span className="mx-2">Update</span>
                        </div>
                    </Link>



                </div>
            </div>

        </div>
    )
}

export default ParticipantBatchDetails;