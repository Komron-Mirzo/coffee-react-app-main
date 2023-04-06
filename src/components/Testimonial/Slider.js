import React, { Component } from "react";
import Slider from 'react-slick';
import SliderContent from './SliderContent';
import RatingImg from '../Testimonial/5stars.png';
import './Slider.css';


export default class ReviewSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            }

            ]
        };
        return (

            <Slider {...settings}>
                {
                    SliderContent.map((item, index) => {
                        return (

                            <div className="slider-container" key={index}>
                                <div className="slider-img">
                                    <img src={item.img} width="92px" height="92px" alt="img" />
                                </div>
                                <div className="slider-content">
                                    <img src={RatingImg} />
                                    <div className="testimonial-text">{item.text}</div>
                                    <div className="testimonial-name">{item.name}</div>
                                    <div className="testimonial-job">{item.job}</div>
                                </div>


                            </div>

                        );
                    })
                }
            </Slider>


        );
    }
}
