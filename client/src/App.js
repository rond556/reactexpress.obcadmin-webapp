import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Messages from "./components/messages/messages";
import Users from "./components/users/users";
import Teams from "./components/teams/teams";
import TeamSignUpCenter from "./components/teamsignupcenter/teamsignupcenter";
import PostAnOpening from "./components/postandopening/postanopening";
import TeamOpenings from "./components/teamopenings/teamopenings";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Users />
          <Teams />
          <TeamSignUpCenter />
          <PostAnOpening />
          <TeamOpenings />
          <Messages />
        </header>
      </div>
    );
  }
}
export default App;
