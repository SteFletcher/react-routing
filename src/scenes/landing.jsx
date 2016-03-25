/**
 * Created by stefletcher on 30/01/2016.
 */
var React = require('react');
import { Button } from '../components/button.jsx';
var _ = require('lodash');
var breakpoints = require('../media-breakpoints.js').breakpoints;

var landingStyles = {
    container: {
        padding: '50',
        borderRadius: '10',
        boxShaddow: 'box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75)',
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

var LandingScene = React.createClass({
    getInitialState: function() {
        return {LandingStyles: LandingStyles};
    },
    componentWillMount: function() {
        return this.mediaAdjust();
    },
    componentDidMount: function() {
        window.addEventListener('resize', this.mediaAdjust);
    },
    mediaAdjust: function() {
        console.log(breakpoints);
        console.log(breakpoints.mobile);
        if(window.innerWidth < breakpoints.mobile.width){
            LandingStyles.container.alignSelf = 'stretch';
        }else{
            LandingStyles.container.alignSelf = 'center';
        }
        this.setState({LandingStyles: _.cloneDeep(LandingStyles)});
    },
    render() {
        return (
            <div style={this.state.LandingStyles.container}>
                <div id="socialButtonContainer" style={this.state.LandingStyles.panelWrapper}>
                    <div id="socialButtonPanel" style={this.state.LandingStyles.panel}>
                        <Button type="local" showIcon="true"/>
                        <Button type="facebook" showIcon="true"/>
                        <Button type="google" showIcon="true"/>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = LandingScene;