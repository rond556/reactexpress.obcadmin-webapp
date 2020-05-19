import React, { Component } from "react";
import "./teams.css";

class Teams extends Component {
  constructor() {
    super();
    this.state = {
      teams: [],
    };
  }
  /*
componentDidMount() { // runs automatically when component is mounted
    fetch('/api/customers') // fetches customers from express server and sets `state`-value to customers that were fetched
        .then(res => res.json())
        .then(teams => this.setState({teams}, () => console.log("Teams fetched...", teams)))
}
*/
  render() {
    return (
      <div>
        <h2>Teams</h2>
      </div>
    );
  }
}

export default Teams;
