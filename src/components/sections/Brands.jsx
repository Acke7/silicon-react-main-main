import React, { useContext} from 'react'
import ImageSlider from '../elements/ImageSlider'
import { BrandsContext } from '../../contexts/BrandsContext'

const Brands = () => {
  const {brands} = useContext(BrandsContext)

  return (
    <section id="brands">
        <div className="container">
          <ImageSlider images={brands} />
        </div>
    </section>

  )
}

export default Brands