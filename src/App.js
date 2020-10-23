import React from 'react';
import Header from './components/presentation/header';
import Footer from './components/presentation/footer';
import LP from './components/presentation/landingpage';
import AboutUs from "./components/presentation/aboutus";
import EducationPage from './components/presentation/educationPage';
import {Route, Switch} from "react-router-dom";

function App() {
    return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route path="/aboutusPage" component={AboutUs}></Route>
        <Route path="/educationPage" component={EducationPage}></Route>
        <Route path="/" component={LP}></Route>
        <Footer></Footer>
      </Switch>
    </div>
  );
}

export default App;
