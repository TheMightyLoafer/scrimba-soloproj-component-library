import React from "react"

export default function BannerNeutral({ variant, content = "Update avalilable...", ...otherProps}) {
    return {variant} == "multi" ? (
        <div className="neutral">
            <h3>Neutral</h3>
            <p>{content}</p>
        </div>
    ) : (  
        <div className="neutral">
            <h3>Neutral</h3>
        </div>)
}