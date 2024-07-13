import React from "react"
import "./features.css"
import PropTypes from 'prop-types';


function Features({ imgSrc, title, text }) {
    return (

        <div className="feature-item">
            <img src={imgSrc} alt="Chat Icon" className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>
                {text}
            </p>
        </div>

    )
}

Features.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};
export default Features