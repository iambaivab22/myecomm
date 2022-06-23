import ReactDom from "react-dom";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";
import Themecontext from "./Themecontext.js";

ReactDom.render(
  <>
    <BrowserRouter>
      <Themecontext>
        <App />
      </Themecontext>
    </BrowserRouter>
  </>,

  document.getElementById("root")
);
