import { Form, InputGroup, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import BatchDetails from "../components/manager/BatchDetails";

const ManagerDashboard = () => {
    return (
        <div className="main-content">
            <h1 className="col-12 col-md-8 heading-2-size mt-4">Welcome garrysmith@gmail.com</h1>
            <div className="heading-4-size primary-colour mb-4">
                <strong>Smart Contract Address:</strong>
                <span style={{ fontWeight: "300", wordBreak: "break-word" }}>
                    0xABCDEF1234567890ABCDEF1234567890ABCDEF12
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
                        {/* <Button variant="dark" style={{ backgroundColor: "#661A25", border: "none", borderRadius: "5px" }} className='px-5'>
                            <Link to="/batchTimeline" className="text-decoration-none text-white">Search</Link>
                        </Button> */}
                    </InputGroup>
                </div>
            </div>

            <BatchDetails />


        </div>
    )
}

export default ManagerDashboard;