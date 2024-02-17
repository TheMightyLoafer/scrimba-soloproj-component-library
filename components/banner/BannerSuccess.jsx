import React from "react"

export default function BannerSuccess({ variant, content = "Operation was a success...", ...otherProps}) {

    return {variant} == "multi" ? (
        <div className="success">
            <h3>Success</h3>
            <p>{content}</p>
        </div>
    ) : (  
        <div className="success">
            <h3>Success</h3>
        </div>)
}