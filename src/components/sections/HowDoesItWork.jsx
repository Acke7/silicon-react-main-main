import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HowDoesItWork = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const [images, setImages] = useState([
        { id: 1, src: '/images/image-sliders/phone-1.svg', alt: 'slide 1' },
        { id: 2, src: '/images/image-sliders/phone-2.svg', alt: 'slide 2' },
        { id: 3, src: '/images/image-sliders/phone-3.svg', alt: 'slide 3' }
    ]);

    return (
        <section id="how-does-it-work">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2>How Does It Work?</h2>
                </div>

                <div className="image-slider">
                    {images.map(image => (
                        <div key={image.id} className="image-slide" data-aos="zoom-in">
                            <img src={image.src} alt={image.alt} />
                        </div>
                    ))}
                </div>

                <div className="section-body" data-aos="fade-up">
                    <h3>Latest transaction history</h3>
                    <p>
                        Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. 
                        Arcu sociis tristique quisque hac in consectetur condimentum.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default HowDoesItWork;
