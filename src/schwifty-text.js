import React from "react";
import "./schwifty-text.scss";

const variantOptions = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "img"];
const containerSizeOptions = {
  small: "SWIF-s-w",
  s: "SWIF-s-w",
  medium: "SWIF-m-w",
  m: "SWIF-m-w",
  large: "SWIF-l-w",
  l: "SWIF-l-w",
  extraLarge: "SWIF-xl-w",
  xl: "SWIF-xl-w"
};
const containerSpeedOptions = {
  superFast: "SWIF-s-fast",
  fast: "SWIF-fast",
  normal: "SWIF-normal",
  slow: "SWIF-slow"
};
const spacialElements = {
  btn: "SWIF-btn"
};

// TODO - btns, divider
export default function SchwiftyText(props) {
  const {
    containerSize = "m",
    text = "",
    variant = "h1",
    colors,
    className = "",
    style = {},
    children,
    textStyle = {},
    options = {}
  } = props;

  const colorsStyle = {};
  const optionStyle = {};
  const optionTextStyle = {};
  const classes = ["schwifty-text"];
  const textElements = [];

  classes.push(className);
  classes.push(containerSizeOptions[containerSize] || "SWIF-m-w");

  if (!!colors && colors.length >= 2) {
    colorsStyle["--schwifty-fir-bg-color"] = colors[0];
    colorsStyle["--schwifty-sec-bg-color"] = colors[1];
    colorsStyle["--schwifty-thr-bg-color"] = colors[2] || colors[1];
  }

  if (options.inverse) {
    optionTextStyle.background = "black";
    optionTextStyle.color = "white";
  }
  if (options.speed) {
    classes.push(containerSpeedOptions[options.speed] || "SWIF-normal");
  }
  if (options.reverse) {
    classes.push("SWIF-reverse");
  }
  if (options.spacialElement) {
    classes.push(spacialElements[options.spacialElement] || "");
  }

  if (children) {
    if (Array.isArray(children)) {
      for (const child of children) {
        textElements.push(getElementFromChild(child));
      }
    } else if (typeof children === "string") {
      const ElementType = variantOptions.includes(variant) ? variant : "h1";
      textElements.push(
        <ElementType style={{ ...textStyle, ...optionTextStyle }}>
          {children}
        </ElementType>
      );
    } else {
      textElements.push(getElementFromChild(children));
    }
  } else {
    const ElementType = variantOptions.includes(variant) ? variant : "h1";
    textElements.push(
      <ElementType style={{ ...textStyle, ...optionTextStyle }}>
        {text}
      </ElementType>
    );
  }

  return (
    <div
      className={classes.join(" ")}
      style={{ ...style, ...colorsStyle, ...optionStyle }}
    >
      {!options.noText &&
        (textElements.length === 1 ? textElements[0] : textElements)}
    </div>
  );
}

function getElementFromChild(child) {
  return variantOptions.includes(child.type) ? child : null;
}

const randomKey = () =>
  `${new Date().getTime()}${parseInt(Math.random() * 100)}`;
