import React from "react";
import ReactDOM from "react-dom";
import Demo from "./demo";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Demo />, document.getElementById("root"));

serviceWorker.unregister();
