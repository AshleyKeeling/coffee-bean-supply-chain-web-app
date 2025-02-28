import { Form, InputGroup, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import SupplyChainStageCard from '../components/SupplyChainStageCard';

// images 
import logo from '../assets/images/logo.png';
import ethLogo from '../assets/images/ethLogo.png';
import cultivation from '../assets/images/cultivation.jpeg';
import harvesting from '../assets/images/harvesting.jpeg';
import processing from '../assets/images/processing.png';
import drying from '../assets/images/drying.jpeg';
import exporting from '../assets/images/exporting.jpeg';
import roasting from '../assets/images/roasting.jpeg';
import packaging from '../assets/images/packaging.jpeg';
import distribution from '../assets/images/distribution.jpeg';
import { Link } from "react-router-dom";



const ConsumerHome = () => {
    return (
        <div className="">
            <div className='main-content'>
                <img src={logo} alt="Coffee Bean Supply Chain Logo" className="mx-auto d-block my-3 my-md-5" id='consumer-logo' />

                <InputGroup id="search-bar">
                    <InputGroup.Text>
                        <FaSearch />
                    </InputGroup.Text>
                    <Form.Control
                        type="text"
                        placeholder="Search Product ID or Smart Contract Address"
                        className="border-start-0"
                    />
                    <Button className='px-4 primary-bg rounded button border-0'>
                        <Link to="/batchTimeline" className="text-decoration-none text-white ">Search</Link>
                    </Button>
                </InputGroup>
            </div>
            <section className='mt-4 secondary-bg'>
                <h2 className='text-center text-white py-3'>Supply Chain Overview</h2>
                <div className='main-content pb-5'>
                    <div className='row g-2 g-md-3 g-lg-4'>
                        <div className='col-6 col-md-4 col-lg-3'>
                            <SupplyChainStageCard number={1} imageSRC={cultivation} imageALT={"image of coffee beans plants"} stageName={"Cultivation"} />
                        </div>
                        <div className='col-6 col-md-4 col-lg-3'>
                            <SupplyChainStageCard number={2} imageSRC={harvesting} imageALT={"image of a person collecting coffee beans"} stageName={"Harvesting"} />
                        </div>
                        <div className='col-6 col-md-4 col-lg-3'>
                            <SupplyChainStageCard number={3} imageSRC={processing} imageALT={"image of machine processing the beans"} stageName={"Processing"} />
                        </div>
                        <div className='col-6 col-md-4 col-lg-3'>
                            <SupplyChainStageCard number={4} imageSRC={drying} imageALT={"image of the coffee beans drying on tables"} stageName={"Drying"} />
                        </div>
                        <div className='col-6 col-md-4 col-lg-3'>
                            <SupplyChainStageCard number={5} imageSRC={exporting} imageALT={"image of coffee beans in sacks"} stageName={"Exporting"} />
                        </div>
                        <div className='col-6 col-md-4 col-lg-3'>
                            <SupplyChainStageCard number={6} imageSRC={roasting} imageALT={"image of machine roasting coffee beans"} stageName={"Roasting"} />
                        </div>
                        <div className='col-6 col-md-4 col-lg-3'>
                            <SupplyChainStageCard number={7} imageSRC={packaging} imageALT={"image of multiple coffee bean products"} stageName={"Packaging"} />
                        </div>
                        <div className='col-6 col-md-4 col-lg-3'>
                            <SupplyChainStageCard number={8} imageSRC={distribution} imageALT={"image of lorry on a road"} stageName={"Distribution"} />
                        </div>
                    </div>
                </div>
            </section>

            <div className="main-content g-1 row my-5 align-items-center">
                <div className="col-12 col-md-8 d-flex flex-column justify-content-center ">
                    <span className="heading-3-size">Why is Ethereum Used for Coffee Traceability?</span>
                    <p className="body-size">
                        The Ethereum blockchain is a secure and transparent blockchain network that records data in a way that cannot be changed or deleted. This makes it ideal for tracking the journey of coffee beans, ensuring that every stage—from farming to distribution—is verified and trustworthy.
                    </p>

                    <p>By storing supply chain data on Ethereum, you can:</p>
                    <ul className="list-unstyled">
                        <li>✅ <strong>Verify authenticity</strong> – See exactly where your coffee comes from and how it was processed.</li>
                        <li>✅ <strong>Ensure product quality</strong> – Track how coffee is handled, stored, and processed to maintain freshness and flavour.</li>
                        <li>✅ <strong>Trust the data</strong> – No single company controls the information, making it <strong>fair and reliable</strong>.</li>
                    </ul>

                    <p>
                        With blockchain, you can trace your coffee’s journey with confidence, knowing that its history is
                        secure, transparent, and trustworthy. <a href="https://www.investopedia.com/terms/e/ethereum.asp" target="_blank" rel="noopener noreferrer" className="text-black"><strong>More information about Ethereum.</strong></a>
                    </p>
                </div>

                {/* Image column with controlled height */}
                <div className="col-12 col-md-4 d-flex align-items-center">
                    <img
                        src={ethLogo}
                        alt="Ethereum logo"
                        className="img-fluid rounded image-control"
                    />
                </div>
            </div>
        </div>
    )
}

export default ConsumerHome;