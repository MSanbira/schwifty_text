import React from "react";
import "./schwifty-text.scss";
import { variantOptions } from "./schwifty-consts";

export default function SchwiftyTextElements({ textProps }) {
  const {
    text = "",
    variant = "h1",
    children,
    textStyle = {},
    options = {},
    onClick = () => {}
  } = textProps;

  const optionTextStyle = {};
  const textElements = [];

  if (children) {
    if (Array.isArray(children)) {
      for (const child of children) {
        textElements.push(getElementFromChild(child));
      }
    } else if (typeof children === "string") {
      const ElementType = variantOptions.includes(variant) ? variant : "h1";
      textElements.push(
        <ElementType
          style={{ ...textStyle, ...optionTextStyle }}
          onClick={onClick}
        >
          {children}
        </ElementType>
      );
    } else {
      textElements.push(getElementFromChild(children));
    }
  } else {
    const ElementType = variantOptions.includes(variant) ? variant : "h1";
    textElements.push(
      <ElementType
        style={{ ...textStyle, ...optionTextStyle }}
        onClick={!options.noText ? onClick : null}
      >
        {text}
      </ElementType>
    );
  }

  return textElements.length === 1 ? textElements[0] : textElements;
}

function getElementFromChild(child) {
  return variantOptions.includes(child.type) ? child : null;
}

const randomKey = () =>
  `${new Date().getTime()}${parseInt(Math.random() * 100)}`;
