/**
 * Created by stefletcher on 30/01/2016.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var SocialButton = require('./components/button.jsx');




ReactDOM.render(

    <div>
        <SocialButton type="facebook"/>
        <SocialButton type="google"/>
    </div>,
        document.getElementById('buttonContainer')
    //document.body
);