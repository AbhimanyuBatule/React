import "./App.css";
import News from "./Components/News";
import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 12;
  apikey = process.env.REACT_APP_NEWS_MONKEY_API_KEY
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            height={4}
          />
          <Switch>
            <Route exact path="/">
              <News
                setProgress={this.setProgress}
                apikey = {this.apikey}
                country="in"
                pageSize={this.pageSize}
                key="general"
                category="general"
              />
            </Route>
            <Route exact path="/general">
              <News
                setProgress={this.setProgress}
                apikey = {this.apikey}
                country="in"
                pageSize={this.pageSize}
                key="general"
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <News
                setProgress={this.setProgress}
                apikey = {this.apikey}
                country="in"
                pageSize={this.pageSize}
                key="business"
                category="business"
              />
            </Route>
            <Route exact path="/health">
              <News
                setProgress={this.setProgress}
                apikey = {this.apikey}
                country="in"
                pageSize={this.pageSize}
                key="health"
                category="health"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                setProgress={this.setProgress}
                apikey = {this.apikey}
                country="in"
                pageSize={this.pageSize}
                key="entertainment"
                category="entertainment"
              />
            </Route>
            <Route exact path="/sports">
              <News
                setProgress={this.setProgress}
                apikey = {this.apikey}
                country="in"
                pageSize={this.pageSize}
                key="sports"
                category="sports"
              />
            </Route>
            <Route exact path="/technology">
              <News
                setProgress={this.setProgress}
                apikey = {this.apikey}
                country="in"
                pageSize={this.pageSize}
                key="technology"
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
