import React from "react"

export default function Badge({ children,
    shape = "square",
    content = "Badge",
    size = "small",
    ...otherProps }) {
    
    return (
        <p 
        className={`badge ${shape} ${size}`} {...otherProps}>
            {content}
        </p>
    )
}