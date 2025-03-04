import { Link } from "react-router-dom";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";


const BatchDetails = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="primary-bg rounded p-2">
            <div className="row">
                <div className="col-12 col-md-8 mb-2">
                    {/* progress bar */}
                    <progress value={0.5} />

                    {/* smart contract address */}
                    <div className="body-size text-white">
                        <strong>Smart Contract Address: </strong>
                        <span style={{ fontWeight: "200", wordBreak: "break-word" }}>
                            0xABCDEF1234567890ABCDEF1234567890ABCDEF12
                        </span>
                    </div>

                    {/* Status */}
                    <div className="body-size text-white">
                        <strong>Status: </strong>
                        <span style={{ fontWeight: "200", wordBreak: "break-word" }}>
                            Currently drying
                        </span>
                    </div>

                    {/* Batch Quantity */}
                    <div className="body-size text-white">
                        <strong>Batch Quantity: </strong>
                        <span style={{ fontWeight: "200", wordBreak: "break-word" }}>
                            5
                        </span>
                    </div>

                    {/* Creation Date */}
                    <div className="body-size text-white">
                        <strong>Creation Date: </strong>
                        <span style={{ fontWeight: "200", wordBreak: "break-word" }}>
                            23/01/2025, 15:45:00
                        </span>
                    </div>

                    {/* latest update */}
                    <div className="body-size text-white">
                        <strong>Latest Update: </strong>
                        <span style={{ fontWeight: "200", wordBreak: "break-word" }}>
                            09/02/2025, 17:06:32
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
                        <tr style={{ fontWeight: "300", wordBreak: "break-word" }}>
                            <td>CB-20250209-XYZ12345</td>
                            <td>In-Progress</td>
                        </tr>
                        <tr>
                            <td colspan="2"><hr style={{ border: "none", borderTop: "2px solid white", opacity: 1 }} /></td>
                        </tr>
                        <tr style={{ fontWeight: "300", wordBreak: "break-word" }}>
                            <td>CB-20250209-XYZ12345</td>
                            <td>In-Progress</td>
                        </tr>
                        <tr>
                            <td colspan="2"><hr style={{ border: "none", borderTop: "2px solid white", opacity: 1 }} /></td>
                        </tr>
                        <tr style={{ fontWeight: "300", wordBreak: "break-word" }}>
                            <td>CB-20250209-XYZ12345</td>
                            <td>In-Progress</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default BatchDetails;