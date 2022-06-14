import React from "react";
import ReactDOM from "react-dom";
import Header from "home/Header";
import Footer from "home/Footer";
import "./index.scss";

const App = () => (
  <>
    <Header />
    <div>
      <h1>PDP Body</h1>
    </div>
    <Footer />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
