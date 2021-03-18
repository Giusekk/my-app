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
import { Home } from "@material-ui/icons";

function App() {
  set_mobile_theme();

  return (
    <Div>
       <Router basename={process.env.PUBLIC_URL}>
         <Heading />
         <Switch>
           {/*<Route path="/my-app" component={NewArticle} exact>
             <Main />
             <NewArticle />
           </Route>
           <Route exact path="/my-app/article/:id">
             <ViewArticle />
           </Route>
           <Route component={NewArticle} path="new-article">
             <NewArticle />
           </Route>
           <Route path="/my-app/d">
             <p>sada</p>
            </Route>*/}
            <Route exact path="/" component={Main} />
            <Route exact path="/new-article" component={NewArticle} />
         </Switch>
       </Router>
       <a href="/my-app/d">Ciao</a>
    </Div>
  );
}

export default App;
