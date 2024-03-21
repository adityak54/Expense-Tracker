import React from "react";
import ReactDOM from "react-dom";
import { SpeechProvider } from "@speechly/react-client";

import { Provider } from './context/context';
import App from './App';
import './index.css'

ReactDOM.render(
<SpeechProvider appId="a6aa5e34-8b45-4257-82a4-7c1c2498eb1b" language="en-US">
<Provider>
<App />
</Provider>
</SpeechProvider>,document.getElementById('root'));
