import React, { Component } from "react";
import "./styles.css";

export default class genImage extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  async genLogo() {
    // const response = await fetch(`https://www.eshocan.com/img/Newlogo.png`);
    // const json = await response.json();
    // this.setState({ data: json });
    return await fetch("https://www.eshocan.com/img/Newlogo.png").then((r) =>
      r.blob()
    );
  }
}
