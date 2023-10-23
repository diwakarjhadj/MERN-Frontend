import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css'; // Import Owl Carousel CSS
import 'owl.carousel/dist/assets/owl.theme.default.css'; // Import Owl Carousel default theme CSS
import diwakar from '../images/WhatsApp.jpeg';
import diw from '../images/Diwakar.jpg';
import '../css/Carousel.css'

const itemsArray = [
    {
        id: 1,
        text: 'Item 1',
        image: diwakar,
    },
    {
        id: 2,
        text: 'Item 2',
        image: diw, // Replace with the actual image path
    },
    {
        id: 3,
        text: 'Item 3',
        image: diwakar, // Replace with the actual image path
    },
    {
        id: 4,
        text: 'Item 4',
        image: diw, // Replace with the actual image path
    },
    {
        id: 5,
        text: 'Item 5',
        image: diwakar, // Replace with the actual image path
    },
];

const Carousel = () => {
    const options = {
        items: 3,
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 2,
            },
            800: {
                items: 3,
            },
            1000: {
                items: 4,
            },
            1200: {
                items: 5,
            },
        },
    };

    return (
        // <OwlCarousel className="owl-theme" {...options}>
        //     <div className="item">
        //         <img src={diwakar} alt="Image 1" />
        //     </div>
        //     <div className="item">Item 2</div>
        //     <div className="item">Item 3</div>
        //     <div className="item">Item 4</div>
        //     <div className="item">Item 5</div>
        //     {/* Add more items as needed */}
        // </OwlCarousel>
        <OwlCarousel className="owl-theme" {...options}>
            {itemsArray.map((item) => (
                <div className="item" key={item.id}>
                    <img src={item.image} alt={item.text} />
                </div>
            ))}
        </OwlCarousel>
    );
};

export default Carousel;