/**
 * Created by stefletcher on 30/01/2016.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var SocialButton = require('./components/button.jsx');




ReactDOM.render(

    <div style={
    		{backgroundColor:'#F5F5F5',
    		 padding: '50',
    		 borderRadius: '10',
    		 boxShaddow: 'box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75)'}
    	}>
        <SocialButton type="local"/>
        <SocialButton type="facebook"/>
        <SocialButton type="google"/>
    </div>,
    document.getElementById('buttonContainer')
    //document.body
);