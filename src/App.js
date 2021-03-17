import React from "react";
import set_mobile_theme from './assets/styles_js/bg_theme';

//ROUTER
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


// JQUERY JS
import $ from 'jquery';


// CUSTOM CSS
import "./assets/css/App.css";
import Div from "div";

//MAIN
import Main from './Layout/Homepage/Main/Main.js';

//HEADING
import Heading from './Layout/Homepage/Heading/Heading.js';
import ViewArticle from "./Layout/Homepage/ViewArticle/ViewArticle";

function App() {
  set_mobile_theme();

  return (
    <Div>
       <Router>
         <Heading />
         <Switch>
           <Route path="/home" exact>
             <Main />
           </Route>
           <Route path="/article/:id">
             <ViewArticle />
           </Route>
           <Route path="/new-article">
             <p>NEW ARTICLE</p>
           </Route>
         </Switch>
       </Router>
       <p>saaa</p>
       <h1>SIII</h1>
    </Div>
  );
}

export default App;
