import React, { useContext } from 'react'
import AccordionItem from './AccordionItem'
import { FaqContext } from '../../contexts/FaqContext'

const Accordion = () => {
    const { faqs } = useContext(FaqContext)

    return (
        <div class="accordion" id="faq-accordion">

            {
                faqs.map(faq => (<AccordionItem key={faq.id} parent="faq-accordion" item={faq} /> ))
            }     

        </div>
    )
}

export default Accordion