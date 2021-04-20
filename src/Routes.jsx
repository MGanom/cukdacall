import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AcademCal from './pages/academcal/AcademCal';
import ClassEval from './pages/classeval/ClassEval';
import InSchool from './pages/inschool/InSchool';
import Main from './pages/main/Main';
import OutSchool from './pages/outschool/OutSchool';
import Footer from './components/footer/Footer';

class Routes extends Component {
  render() {
    return (
      <Router>
        {/* <Link to="/main">Main</Link>
        <Link to="/insideschool">Inside School</Link>
        <Link to="/outsideschool">Outside School</Link>
        <Link to="/academiccalender">Academic Calender</Link>
        <Link to="/classevaluation">Class Evaluation</Link> */}
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route exact path="/insideschool" component={InSchool} />
          <Route exact path="/footer" component={Footer} />
          <Route exact path="/outsideschool" component={OutSchool} />
          <Route exact path="/academiccalender" component={AcademCal} />
          <Route exact path="/classevaluation" component={ClassEval} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
