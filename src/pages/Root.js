import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./Home";
import Scoreboard from "./scoreboard/Scoreboard";
import {Menu} from "./Menu";
import {Index} from "./heroes/Index.js";

export class Root extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Menu></Menu>
        { /*네스티드 라우팅 영역*/}
        <div className="container" style={{backgroundColor: '#ffffff'}}>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/heroes" component={Index}></Route>
          <Route path="/scoreboard" component={Scoreboard}></Route>
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}