/**
 * Created by stefletcher on 30/01/2016.
 */
var React = require('react');
import {Button} from '../components/button.jsx';
var _ = require('lodash');
var breakpoints = require('../media-breakpoints.js').breakpoints;

var homeStyles = {
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
        alignContent: 'stretch',
        width: 350}
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
        console.log(breakpoints);
        console.log(breakpoints.mobile);
        if(window.innerWidth < breakpoints.mobile.width){
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
                        <Button type="local" link="/login" showIcon="true" />
                        <Button type="facebook" link="/" showIcon="true" />
                        <Button type="google" link="/"  showIcon="true" />
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = HomeScene;