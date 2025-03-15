import React from 'react'
import StarRating from './StarRating'

const Testimonial = ({item}) => {
    return (
        <div className="testimonial">
            <div className="testimonial-icon">
                <i className="fa-solid fa-quote-left"></i>
            </div>

            <StarRating stars={item.starRating} />

            <p className="testimonial-comment">
                {item.comment}
            </p>

            <div className="client-info">
                <img className="image" src={item.avatarUrl} alt={item.author} />
                <div className="author">{item.author}</div>
                <div className="role">{item.jobRole}</div>
            </div>

        </div>
    )
}

export default Testimonial