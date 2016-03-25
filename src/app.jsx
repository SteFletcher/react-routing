/**
 * Created by stefletcher on 30/01/2016.
// */
//var React = require('react');
//var ReactDOM = require('react-dom');
////var LandingScene  = require('./scenes/landing.jsx');
////var HomeScene  = require('./scenes/home.jsx');
////var LoginScene  = require('./scenes/login.jsx');
//var Router = require('react-router').Router;
//var Route = Router.Route;
//var hashHistory = Router.hashHistory;

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, Link } from 'react-router'
import LoginScene from './scenes/login.jsx'
import HomeScene from './scenes/home.jsx'
import About from './scenes/about.jsx'

const App = React.createClass({
	render() {
		return (
			<div>
				<h1>hello router</h1>
				<LoginScene/>
			</div>
		)
	}

});


const RoutingElement = React.createClass({
	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/" component={HomeScene} />
				<Route path="/login" component={LoginScene} />
			</Router>
		)
	}

});


render((
    //

	<RoutingElement/>
)
		, document.getElementById('sceneContainer'));


//ReactDOM.render(
//
//	//<HomeScene></HomeScene>,
//	<LoginScene></LoginScene>,
//    document.getElementById('sceneContainer')
//    //document.body
//);