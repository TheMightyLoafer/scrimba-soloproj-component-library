import React from "react"
import BannerSuccess from "./BannerSuccess"
import BannerWarning from "./BannerWarning"
import BannerError from "./BannerError"
import BannerNeutral from "./BannerNeutral"

const bannerComponents = {
    success: BannerSuccess,
    warning: BannerWarning,
    error: BannerError,
    neutral: BannerNeutral
}

export default function Banner({ style, ...otherProps }) {
    const BannerComponent = bannerComponents[style]
    
    return BannerComponent ? <BannerComponent {...otherProps} /> : null
}