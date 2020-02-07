import React from "react";
import "./schwifty-text.scss";

const variantOptions = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "img"];
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

// TODO - children, inverse, img
export default function SchwiftyText(props) {
  const {
    containerSize = "m",
    text = "",
    variant = "h1",
    colors,
    className = "",
    style = {},
    children,
    textStyle = {}
  } = props;

  const textElements = [];
  const containerSizeClass = Object.keys(containerSizeOptions).includes(
    containerSize
  )
    ? containerSizeOptions[containerSize]
    : "m-width";

  const colorsStyle = {};
  if (!!colors && colors.length >= 2) {
    colorsStyle["--schwifty-fir-bg-color"] = colors[0];
    colorsStyle["--schwifty-sec-bg-color"] = colors[1];
    colorsStyle["--schwifty-thr-bg-color"] = colors[2] || colors[1];
  }

  if (children) {
    if (Array.isArray(children)) {
      for (const child of children) {
        textElements.push(getElementFromChild(child));
      }
    } else {
      textElements.push(getElementFromChild(children));
    }
  } else {
    const ElementType = variantOptions.includes(variant) ? variant : "h1";
    textElements.push(<ElementType style={textStyle}>{text}</ElementType>);
  }

  return (
    <div
      className={`schwifty-text ${containerSizeClass} ${className}`}
      style={{ ...style, ...colorsStyle }}
    >
      {textElements}
    </div>
  );
}

function getElementFromChild(child) {
  return variantOptions.includes(child.type) ? child : null;
}

const randomKey = () =>
  `${new Date().getTime()}${parseInt(Math.random() * 100)}`;
