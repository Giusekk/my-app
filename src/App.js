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
import NewArticle from "./Layout/Homepage/NewArticle/NewArticle";

function App() {
  set_mobile_theme();

  return (
    <Div>
       <Router basename={process.env.PUBLIC_URL + "/"}>
         <Heading />
         <Switch>
           <Route path="/" exact>
             <Main />
           </Route>
           <Route exact path="/article/:id">
             <ViewArticle />
           </Route>
           <Route path="/new-article">
             <NewArticle />
           </Route>
           <Route path="/d">
             <p>sada</p>
           </Route>
         </Switch>
       </Router>
       <a href="/my-app/d">Ciao</a>
    </Div>
  );
}

export default App;
