var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;


// Hide the hash history key in react-router v1 and v2
//
// v1.x
// var CreateHistory = require('react-router/node_modules/history/lib/createHashHistory');
// var History = new CreateHistory({
//     queryKey: false
// });
//
// v2.0.0
import {useRouterHistory} from 'react-router'
import {createHashHistory} from 'history'
// useRouterHistory creates a composable higher-order function
const History = useRouterHistory(createHashHistory)({queryKey: false});


// COMPONENTS
var Base = require('./components/Base.jsx');
var Page1 = require('./components/Page1.jsx');
var Page2 = require('./components/Page2.jsx');

// ROUTES
var Routes = (
    <Router history={History}>
        <Route path="/" component={Base}>
            <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
        </Route>
    </Router>
);

module.exports = Routes;
