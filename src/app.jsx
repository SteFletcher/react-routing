/**
 * Created by stefletcher on 30/01/2016.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var HomeScene = require('./scenes/home.jsx');


// if width < 640 px set to mobile view
//if(document.body.clientWidth < 640){
//	document.body.style
//}

ReactDOM.render(

	<HomeScene></HomeScene>,
    document.getElementById('sceneContainer')
    //document.body
);