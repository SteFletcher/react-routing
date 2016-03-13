/**
 * Created by stefletcher on 30/01/2016.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var SocialButton = require('../components/button.jsx');
var BreakpointsMixin = require('react-breakpoints-mixin').BreakpointsMixin;
var _ = require('lodash');


// if width < 640 px set to mobile view
//if(document.body.clientWidth < 640){
//	document.body.style
//}
var homeStyles = {
    container: {
        padding: '50',
        borderRadius: '10',
        boxShaddow: 'box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75)',
        //alignSelf: {this.breakPoint},
        display: 'flex',
        alignItems: 'flex-end',
        flex: 1
    },
    panelWrapper: {
        display: 'flex',
        flex: '1',
        flexDirection: 'row',
        alignItems: 'flex-end'},
    panel: {
        display: 'flex',
        flex: '1',
        flexDirection: 'column',
        alignItems: 'stretch',
        alignContent: 'stretch'}
}

var HomeScene = React.createClass({
    getInitialState: function() {
        return {homeStyles: homeStyles};
    },
    componentWillMount: function() {
        return this.mediaAdjust();
    },
    componentDidMount: function() {
        window.addEventListener('resize', this.mediaAdjust);
    },
    mediaAdjust: function() {
        if(window.innerWidth < 640){
            homeStyles.container.alignSelf = 'stretch';
        }else{
            homeStyles.container.alignSelf = 'center';
        }
        this.setState({homeStyles: _.cloneDeep(homeStyles)});
    },
    render() {
        return (
            <div style={this.state.homeStyles.container}>
                <div id="socialButtonContainer" style={this.state.homeStyles.panelWrapper}>
                    <div id="socialButtonPanel" style={this.state.homeStyles.panel}>
                        <SocialButton type="local" />
                        <SocialButton type="facebook" />
                        <SocialButton type="google" />
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = HomeScene;