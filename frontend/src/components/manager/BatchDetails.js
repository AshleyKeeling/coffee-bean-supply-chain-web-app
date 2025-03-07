import { Link } from "react-router-dom";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import React from 'react';

const BatchDetails = ({ smartContractAddress, status, batchQuantity, creationDate, latestUpdate, products }) => {
    const [isOpen, setIsOpen] = useState(false);

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
                            {smartContractAddress}
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
                    <Link to="/batchTimeline" className="text-decoration-none">
                        <div className="button tertiary-bg text-white rounded text-center py-3 w-100 mb-2">
                            <span className="mx-2">View Batch Overview</span>
                        </div>
                    </Link>



                    <div
                        className="button tertiary-bg text-white rounded text-center py-3 w-100 mt-2 d-flex justify-content-center align-items-center"
                        onClick={() => setIsOpen(!isOpen)}
                        style={{ cursor: "pointer" }}
                    >
                        <span className="mx-2">View Products</span>
                        {isOpen ? <FaChevronUp className="ms-2" /> : <FaChevronDown className="ms-2" />}
                    </div>
                </div>
            </div>
            {isOpen && (
                <table className="w-100 tertiary-bg rounded text-white body-size products-table p-2 mt-3 mt-lg-0">
                    <thead>
                        <tr>
                            <th><strong>Product ID</strong></th>
                            <th><strong>Status</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products && products.length > 0 ? (
                            products.map((product, index) => (
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
        </div>
    )
}

export default BatchDetails;