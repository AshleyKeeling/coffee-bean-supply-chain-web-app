import { Link } from "react-router-dom"
import SlideShow from "../components/SlideShow";
import WhatIsProvidedCard from "../components/WhatIsProvidedCard";
import participanthomePageDetailsJSON from "../assets/json/participantHomePageDetails.json";

const ParticipantHome = () => {
    // creates 'card' for each detail from json file
    const ParticipantHomePageDetails = participanthomePageDetailsJSON.details.map((detail, index) => (
        <div className="col-12 col-md-6 col-lg-3" key={index}>
            <WhatIsProvidedCard SRC={require(`../assets/images/${detail.image}`)} ALT={detail.alt} heading={detail.name} content={detail.description} />
        </div>
    ));

    return (
        <div>
            <div className="main-content">
                <h1 className="heading-2-size mt-3"><strong>Trace Coffee Beans</strong> Securely on the <strong className="tertiary-colour">Ethereum Blockchain.</strong></h1>
                <h2 style={{ fontWeight: "300" }} className="primary-colour heading-4-size">Build trust and transparency throughout the coffee supply chain.</h2>
                <div className="container-fluid px-0 mt-3"> {/* Ensures no side padding */}
                    <div className="row justify-content-center mx-0"> {/* Centers content, removes extra margins */}

                        {/* Sign Up Button - Flush Left */}
                        <Link to="/signUp" className="text-decoration-none col-6 col-md-4 col-lg-3 pe-2">
                            <div className="button border primary-bg text-white rounded text-center py-3 w-100">
                                <span className="mx-2">SIGN UP</span>
                            </div>
                        </Link>

                        {/* Sign In Button - Flush Right */}
                        <Link to="/signIn" className="text-decoration-none col-6 col-md-4 col-lg-3 ps-2">
                            <div className="button border primary-bg text-white rounded text-center py-3 w-100">
                                <span className="mx-2">SIGN IN</span>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
            <div className="my-3">
                <SlideShow />
            </div>
            <div className="main-content">
                <h2 className="heading-3-size my-4">What is Provided?</h2>
                <div className="row g-0">
                    {ParticipantHomePageDetails}
                </div>
            </div>
        </div >
    )
}

export default ParticipantHome;
