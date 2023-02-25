import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

if (typeof Storage !== "undefined" && document.getElementById("application")) {
    ReactDOM.render(<App />, document.getElementById("application"));
} else {
    alert("Trình duyệt của bạn đã cũ và không được hộ trợ. Mong bạn nâng cấp");
}
