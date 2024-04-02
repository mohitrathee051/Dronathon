import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import slide1 from '../assets/slide1.png';
import slide2 from '../assets/slide2.png';
import slide3 from '../assets/slide3.png';
import slide4 from '../assets/slide4.png';
import slide5 from '../assets/slide5.png';
import slide6 from '../assets/slide6.png';
import slide7 from '../assets/slide7.png';
import styles from './SliderPage.module.css';

function SliderPage() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <div className={styles.fullscreen}>
            <p className={styles.heading}>
                Goals:
            </p>
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3500}
                keyBoardControl={true}
                customTransition="all .7"
                transitionDuration={1000} // Adjust this value for smooth animation
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass={styles.slide} // Use styles.slide for itemClass
            >
                <div>
                    <img src={slide1} alt="slide1" />
                    <p>Commitment</p>
                </div>
                <div>
                    <img src={slide2} alt="slide2" />
                    <p>Reading</p>
                </div>
                <div>
                    <img src={slide3} alt="slide3" />
                    <p>Drink Water</p>
                </div>
                <div>
                    <img src={slide4} alt="slide4" />
                    <p>Daily Progress Selfie</p>
                </div>
                <div>
                    <img src={slide5} alt="slide5" />
                    <p>Balanced Diet</p>
                </div>
                <div>
                    <img src={slide6} alt="slide6" />
                    <p>Healthy Habits</p>
                </div>
                <div>
                    <img src={slide7} alt="slide7" />
                    <p>Physical Activity</p>
                </div>
            </Carousel>
        </div>
    )
}

export default SliderPage;
