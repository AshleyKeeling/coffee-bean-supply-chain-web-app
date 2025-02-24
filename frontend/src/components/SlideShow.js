import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ethLogo from '../assets/images/ethLogo.png';
import cultivation from '../assets/images/cultivation.jpeg';
import harvesting from '../assets/images/harvesting.jpeg';
import processing from '../assets/images/processing.png';
import drying from '../assets/images/drying.jpeg';
import exporting from '../assets/images/exporting.jpeg';
import roasting from '../assets/images/roasting.jpeg';
import packaging from '../assets/images/packaging.jpeg';
import distribution from '../assets/images/distribution.jpeg';
import lifebean from '../assets/images/lifebean.jpg';
import coffeeSupplyChain from '../assets/images/coffeeSupplyChain.png';
import coffeeOutside from '../assets/images/coffeeOutside.jpg';
import freshCoffeeBeans from '../assets/images/freshCoffeebeans.jpg';


const SlideShow = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 7500,
        autoplaySpeed: 2000,
        cssEase: "ease",
        variableWidth: true, // Allows spacing to be applied
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 5 } },
            { breakpoint: 1024, settings: { slidesToShow: 4 } },
            { breakpoint: 768, settings: { slidesToShow: 3 } },
            { breakpoint: 576, settings: { slidesToShow: 2 } }
        ]
    };

    const images = [
        cultivation, roasting, exporting, coffeeOutside, freshCoffeeBeans, drying, lifebean, harvesting, coffeeSupplyChain, processing, packaging, distribution, ethLogo
    ];

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="slide-wrapper"> {/* Add spacing wrapper */}
                        <img src={image} alt={`Slide ${index}`} className="slide-img" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SlideShow;