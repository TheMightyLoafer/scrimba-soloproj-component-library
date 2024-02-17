import React from "react"

export default function BannerError({variant, content = "Update avalilable...", ...otherProps}) {
    return {variant} == "multi" ? (
        <div className="error">
            <h3>Error</h3>
            <p>Content</p>
        </div>
    ) : (
        <div className="error">
            <h3>Error</h3>
        </div>
    )
}