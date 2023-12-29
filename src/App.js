import "./App.css";
import News from "./Components/News";
import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default class App extends Component {
  pageSize = 12;
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/"><News country="in" pageSize={this.pageSize} key= "general" category="general" /></Route>
            <Route exact path="/general"><News country="in" pageSize={this.pageSize} key= "general" category="general" /></Route>
            <Route exact path="/business"><News country="in" pageSize={this.pageSize} key= "business" category="business" /></Route>
            <Route exact path="/health"><News country="in" pageSize={this.pageSize} key= "health" category="health" /></Route>
            <Route exact path="/entertainment"><News country="in" pageSize={this.pageSize} key= "entertainment" category="entertainment" /></Route>
            <Route exact path="/sports"><News country="in" pageSize={this.pageSize} key= "sports" category="sports" /></Route>
            <Route exact path="/technology"><News country="in" pageSize={this.pageSize} key= "technology" category="technology"/></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
