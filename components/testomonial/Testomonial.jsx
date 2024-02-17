import React from "react"


export default function Testomonial( {children, icon, content, ...otherProps} ) {
    return(
        
        <div className="container">
            <img className="avatar" />
            <div className="content">
                {icon}
                <p>{content ? content : "Default value"}</p>
                <span className="subtext">{otherProps.author}</span>
                <span className="subtext">{otherProps.credential}</span>
            </div>
        </div>
    )
}