import React from 'react'
import LinkChevronButton from '../elements/LinkChevronButton'
import LinkDownloadButton from '../elements/LinkDownloadButton'

const Hero = () => {
  return (
    <section id="hero">
        <div className="container">

            <div className="headline">
                <h1>Manage All Your Money in One App</h1>
            </div>
            <div className="content">
                <p>We offer you a new generation of the mobile banking. Save, spend & manage money inyour pocket.</p>
                <div className="app-downloads">
                    <LinkDownloadButton to="/" text="App Store" description="Download on the" icon="fa-brands fa-apple" />
                    <LinkDownloadButton to="/" text="Google Play" description="GET IT ON" image="/images/icons/googleplay-icon.svg" />
                </div>
                <LinkChevronButton to="/" text="Discover more" />
            </div>
            <div className="image">
                <img src="/images/hero-image.svg" alt="" />
            </div>

        </div>
    </section>
  )
}

export default Hero