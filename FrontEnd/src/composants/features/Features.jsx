import React from "react"
import "./features.css"


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

export default Features