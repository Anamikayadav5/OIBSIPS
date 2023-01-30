import React from 'react'
import lan1 from './images/lan1.jpg'
import lan2 from './images/lan2.jpg'
import lan3 from './images/lan3.jpg'
import './style.css'

const Carousel = () => {
    return (
        <>
            <div className="container-fluid banner">
                <div id="carouselExampleCaptions" className="carousel slide" style={{ zIndex: "0.5" }}>

                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="header-title" style={{ position: "absolute", zIndex: 1 }}>
                            <h2>THE WORLD OF TRAVELLER</h2>
                        </div>
                        <div className="carousel-item active">
                            <img src={lan1} className="d-block w-100 img-fluid" alt="..." />
                            <div className="carousel-caption d-none d-md-block">

                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={lan2} className="d-block w-100 img-fluid" alt="..." style={{ objectFit: "contain" }} />
                            <div className="carousel-caption d-none d-md-block">

                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={lan3} className="d-block w-100 img-fluid" alt="..." />
                            <div className="carousel-caption d-none d-md-block">

                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>

                </div>
            </div>
        </>
    )
}

export default Carousel