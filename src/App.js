import "./App.css";
import News from "./Components/News";
import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = ()=> {
  let pageSize = 12;
  const apikey = process.env.REACT_APP_NEWS_MONKEY_API_KEY
  const [progress, setProgress] = useState(0);
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            color="#f11946"
            progress={progress}
            height={4}
          />
          <Switch>
            <Route exact path="/">
              <News
                setProgress={setProgress}
                apikey = {apikey}
                country="in"
                pageSize={pageSize}
                key="general"
                category="general"
              />
            </Route>
            <Route exact path="/general">
              <News
                setProgress={setProgress}
                apikey = {apikey}
                country="in"
                pageSize={pageSize}
                key="general"
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <News
                setProgress={setProgress}
                apikey = {apikey}
                country="in"
                pageSize={pageSize}
                key="business"
                category="business"
              />
            </Route>
            <Route exact path="/health">
              <News
                setProgress={setProgress}
                apikey = {apikey}
                country="in"
                pageSize={pageSize}
                key="health"
                category="health"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                setProgress={setProgress}
                apikey = {apikey}
                country="in"
                pageSize={pageSize}
                key="entertainment"
                category="entertainment"
              />
            </Route>
            <Route exact path="/sports">
              <News
                setProgress={setProgress}
                apikey = {apikey}
                country="in"
                pageSize={pageSize}
                key="sports"
                category="sports"
              />
            </Route>
            <Route exact path="/technology">
              <News
                setProgress={setProgress}
                apikey = {apikey}
                country="in"
                pageSize={pageSize}
                key="technology"
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
}

export default App;
