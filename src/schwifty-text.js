import React from "react";
import "./schwifty-text.scss";

export default function SchwiftyText(props) {
  const { containerSize = "m", text = "", variant = "h1", colors } = props;

  const variantOptions = ["h1", "h2", "h3", "h4", "h5", "h6", "p"];
  const containerSizeOptions = {
    small: "s-width",
    s: "s-width",
    medium: "m-width",
    m: "m-width",
    large: "l-width",
    l: "l-width",
    extraLarge: "xl-width",
    xl: "xl-width"
  };

  const TextElement = variantOptions.includes(variant) ? variant : "h1";
  const containerSizeClass = Object.keys(containerSizeOptions).includes(
    containerSize
  )
    ? containerSizeOptions[containerSize]
    : "m-width";

  const colorsStyle = {};
  if (!!colors && colors.length >= 2) {
    colorsStyle["--fir-bg-color"] = colors[0];
    colorsStyle["--sec-bg-color"] = colors[1];
    colorsStyle["--thr-bg-color"] = colors[2] || colors[1];
  }

  return (
    <div className={`schwifty-text ${containerSizeClass}`} style={colorsStyle}>
      <TextElement>{text}</TextElement>
    </div>
  );
}
