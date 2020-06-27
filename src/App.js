import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Header from './components/Header/Header';
import Register from "./components/Profile/Register";
import Login from "./components/Profile/Login";

function App(){
  return (
    <Router>
      <Route exact path="/" component={Header} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/addHospital" component={Header} />
      <Route exact path="/viewHospital" component={Header} />
      <Route exact path="/viewHospital/:id" component={Header} />
      <Route exact path="/editHospital/:id" component={Header} />
      <Route exact path="/addCenter" component={Header} />
      <Route exact path="/viewCenter" component={Header} />
      <Route exact path="/viewCenter/:id" component={Header} />
      <Route exact path="/editCenter/:id" component={Header} />
      <Route exact path="/daily" component={Header} />
      <Route exact path="/report" component={Header} />
      <Route exact path="/report/:id" component={Header} />
      <Route exact path="/profile" component={Header} />
      <Route exact path="/testYourSelf" component={Header} />
      <Route exact path="/preventions" component={Header} />
    </Router>
  );
};

export default App;
