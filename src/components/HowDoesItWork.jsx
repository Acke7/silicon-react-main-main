import React from 'react'

const HowDoesItWork = () => {
  return (
    <section id="how-does-it-work-section">
        <div className="container">

            <div className="section-title">
                <h2>How Does It Work?</h2>
            </div>
            
            <div className="image-slider">
                <div className="image-slide">
                    <img src="/images/image-sliders/phone-1.svg" alt="slide 1" />
                </div>
                <div className="image-slide">
                    <img src="/images/image-sliders/phone-2.svg" alt="slide 3" />
                </div>
                <div className="image-slide">
                    <img src="/images/image-sliders/phone-3.svg" alt="slide 3" />
                </div>
            </div>

            <div className="section-body">
                <h3>Latest transaction history</h3>
                <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum.</p>
            </div>

        </div>
    </section>
  )
}

export default HowDoesItWork