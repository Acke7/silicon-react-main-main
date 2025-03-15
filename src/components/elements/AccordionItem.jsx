import React from 'react'

const AccordionItem = ({parent, item}) => {
  return (
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#faq-${item.id}`} aria-expanded="false" aria-controls={`faq-${item.id}`}>
                {item.title}
            </button>
        </h2>
        <div id={`faq-${item.id}`} class="accordion-collapse collapse" data-bs-parent={`#${parent}`}>
            <div class="accordion-body">
                {item.content}
            </div>
        </div>
    </div>
  )
}

export default AccordionItem