import React from 'react'
import {HashRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './views/Home'
import ProtectedRoute from "./provider/ProtectedRoute";
import Therapy from "./views/Therapy";
import About from "./views/About";


const AppComponent = styled.div`


  `

function App() {
  return (
    <AppComponent>
      <Router>
        <Switch>
          <ProtectedRoute path="/therapy">
            <Therapy/>
          </ProtectedRoute>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/" >
            <Home />
          </Route>


        </Switch>
      </Router>

    </AppComponent>
  );
}

export default App;
