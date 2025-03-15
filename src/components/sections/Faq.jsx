import React from 'react'
import { Link } from 'react-router-dom'
import Accordion from '../elements/Accordion'
import ContactOption from '../elements/ContactOption'

const Faq = () => {
  return (
    <section id="faq">
        <div className="container">
            
            <div className="headline">
                <h2>Any questions? Check out the FAQs</h2>
                <p>Still have unanswered questions and need to get in touch?</p>
            </div>

            <div className="contact-options">
                <ContactOption icon="fa-solid fa-phone" text="Still have questions?" uri="/contact" linkText="Contact us" color="purple" />
                <ContactOption icon="bi bi-chat-dots-fill" text="Don't like phone calls?" uri="/contact" linkText="Contact us" color="green" />
            </div>

            <Accordion />

        </div>
    </section>
  )
}

export default Faq