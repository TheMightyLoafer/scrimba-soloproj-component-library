import React from "react"

export default function BannerWarning({ variant, content = "Alert! Something bad might happen!", ...otherProps}) {
    return {variant} == "multi" ? (
        <div className="warning">
            <h3>Warning</h3>
            <p>{content}</p>
        </div>
    ) : (  
        <div className="warning">
            <h3>Warning</h3>
        </div>)
}