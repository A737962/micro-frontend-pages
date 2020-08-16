import React from "react";
import "./App.css";
import AboutAutoZone from "./components/AboutUs/AboutAutoZone/AboutAutoZone";
import AffliateProgram from "./components/AboutUs/AffliateProgram/AffliateProgram";
import InvestorInformation from "./components/AboutUs/InvestorInformation/InvestorInformation";
import MockData from "./components/AboutUs/MockData/MockData.json";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">About AutoZone</Link>
        </li>
        <li>
          <Link to="/affliateProgram">Affliate Program</Link>
        </li>
        <li>
          <Link to="/investorInformation">Investor Information</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/">
          <AboutAutoZone mockData={MockData}/>
        </Route>
        <Route path="/affliateProgram">
          <AffliateProgram mockData={MockData}/>
        </Route>
        <Route path="/investorInformation">
          <InvestorInformation mockData={MockData}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
