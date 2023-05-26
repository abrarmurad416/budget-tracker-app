import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import index from "./index.css";
import { Provider } from "./context/context";
import { SpeechProvider } from "@speechly/react-client";

ReactDOM.render(
    <SpeechProvider
        appId="1ca77879-61d9-4b2e-b1d3-6532bff2fdca"
        language="en-US"
    >
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById("root")
);
