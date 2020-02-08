import React from "react";
import "./schwifty-text.scss";
import SchwiftyTextElements from "./schwifty-text-elements";
import {
  containerSizeOptions,
  containerSpeedOptions,
  spacialElements
} from "./schwifty-consts";

// TODO - btns, divider, design demo
export default function SchwiftyText(props) {
  const {
    containerSize = "m",
    colors,
    className = "",
    style = {},
    options = {},
    onClick
  } = props;

  const colorsStyle = {};
  const optionStyle = {};
  const classes = ["schwifty-text"];

  classes.push(className);
  classes.push(containerSizeOptions[containerSize] || "SWIF-m-w");

  if (!!colors && colors.length >= 2) {
    colorsStyle["--schwifty-fir-bg-color"] = colors[0];
    colorsStyle["--schwifty-sec-bg-color"] = colors[1];
    colorsStyle["--schwifty-thr-bg-color"] = colors[2] || colors[1];
  }

  if (options.inverse) {
    classes.push("SWIF-inverse");
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

  return (
    <div
      className={classes.join(" ")}
      style={{ ...style, ...colorsStyle, ...optionStyle }}
      onClick={options.noText ? onClick : null}
    >
      {!options.noText && <SchwiftyTextElements textProps={props} />}
    </div>
  );
}
