import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./index.scss";

const App = () => (
  <>
    <Header />
    <div>
      <h1>Home Body</h1>
    </div>
    <Footer />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
