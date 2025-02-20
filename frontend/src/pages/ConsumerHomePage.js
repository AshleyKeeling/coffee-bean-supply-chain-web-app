import logo from '../assets/images/logo.png';
import image from '../assets/images/image 5.png';
import { Form, InputGroup, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import SupplyChainStageCard from '../components/SupplyChainStageCard';


const ConsumerHomePage = () => {
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
                    <Button variant="dark" style={{ backgroundColor: "#661A25", border: "none", borderRadius: "5px" }} className='px-4'>
                        Search
                    </Button>
                </InputGroup>
            </div>
            <section className='mt-5 secondary-bg'>
                <h2 className='text-center text-white py-3'>Supply Chain Overview</h2>
                <div className='main-content container'>
                    <div className='row g-4'>
                        <div className='col-6 col-md-4 col-lg-3'>
                            <SupplyChainStageCard number={1} imageSRC={image} imageALT={"image"} stageName={"Cultivation"} />
                        </div>
                        <div className='col-6 col-md-4 col-lg-3'>
                            <SupplyChainStageCard number={1} imageSRC={image} imageALT={"image"} stageName={"Cultivation"} />
                        </div>
                        <div className='col-6 col-md-4 col-lg-3'>
                            <SupplyChainStageCard number={1} imageSRC={image} imageALT={"image"} stageName={"Cultivation"} />
                        </div>
                        <div className='col-6 col-md-4 col-lg-3'>
                            <SupplyChainStageCard number={1} imageSRC={image} imageALT={"image"} stageName={"Cultivation"} />
                        </div>
                        <div className='col-6 col-md-4 col-lg-3'>
                            <SupplyChainStageCard number={1} imageSRC={image} imageALT={"image"} stageName={"Cultivation"} />
                        </div>
                        <div className='col-6 col-md-4 col-lg-3'>
                            <SupplyChainStageCard number={1} imageSRC={image} imageALT={"image"} stageName={"Cultivation"} />
                        </div>
                        <div className='col-6 col-md-4 col-lg-3'>
                            <SupplyChainStageCard number={1} imageSRC={image} imageALT={"image"} stageName={"Cultivation"} />
                        </div>
                        <div className='col-6 col-md-4 col-lg-3'>
                            <SupplyChainStageCard number={1} imageSRC={image} imageALT={"image"} stageName={"Cultivation"} />
                        </div>
                    </div>



                </div>
            </section>
        </div>
    )
}

export default ConsumerHomePage;