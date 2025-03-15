import React from 'react'
import { DarkModeProvider } from './DarkModeContext'
import { FaqProvider } from './FaqContext'
import { TestimonialsProvider } from './TestimonalsContext'
import { BrandsProvider } from './BrandsContext'
import { SubscribeProvider } from './SubscribeContext'

const Providers = ({children}) => {
  return (
    
    <DarkModeProvider>
        <FaqProvider>
            <TestimonialsProvider>
                
              <BrandsProvider>
                <SubscribeProvider>
                  {children}
                </SubscribeProvider>
              </BrandsProvider>
            
            </TestimonialsProvider>
        </FaqProvider>
    </DarkModeProvider>

  )
}

export default Providers