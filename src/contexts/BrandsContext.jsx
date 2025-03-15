import { useState, createContext } from "react"

export const BrandsContext = createContext()

export const BrandsProvider = ({children}) => {
    const [brands, setBrands] = useState([
        { id: 1, url: '/images/brands/brand-1.svg', alt: 'brand 1' },
        { id: 2, url: '/images/brands/brand-2.svg', alt: 'brand 2' },
        { id: 3, url: '/images/brands/brand-3.svg', alt: 'brand 3' },
        { id: 4, url: '/images/brands/brand-4.svg', alt: 'brand 4' },
        { id: 5, url: '/images/brands/brand-5.svg', alt: 'brand 5' },
        { id: 6, url: '/images/brands/brand-6.svg', alt: 'brand 6' }
    ])
    
    return (
        <BrandsContext.Provider value={{ brands }}>
            {children}
        </BrandsContext.Provider>
    )
}