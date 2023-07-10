import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// const rootElement = document.getElementById("root");
//     ReactDOM.render(
//     <BrowserRouter>
//     <Routes>
//         <Route exact path="/" component={App} />
//         {/* <Route path="/page2" component={Page2} /> */}
//     </Routes>
//     </BrowserRouter>,
//     rootElement
//     );