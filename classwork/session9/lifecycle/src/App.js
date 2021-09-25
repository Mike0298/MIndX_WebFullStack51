import React, { Component } from "react";
import "./App.css";

import Header from "../src/components/header";
import Footer from "../src/components/footer";
import LifecycleComponent from "../src/components/lifecycle";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lifeCycleActive: true,
      footerText: "I am footer text",
    };
  }

  getKeyWords = event => {
    let keyword = event.target.value
    console.log(keyword);
  }

  render() {
    return (
      <div>
        <Header keyword={""} />
        {this.state.lifeCycleActive ? <LifecycleComponent /> : null}
        <button
          onClick={() =>
            this.setState({ lifeCycleActive: !this.state.lifeCycleActive })
          }
        />
        <Footer footerText={this.state.footerText} />
      </div>
    );
  }
}

export default App;
