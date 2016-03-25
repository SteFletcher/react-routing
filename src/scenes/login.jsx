/**
 * Created by stefletcher on 30/01/2016.
 */
var React = require('react');
var _ = require('lodash');
//var breakpoints = require('../media-breakpoints.js').breakpoints;

import { breakpoints } from '../media-breakpoints.js'
import { Input } from '../components/input.jsx'
import { Button } from '../components/button.jsx'

var styles = {
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
        justifyContent: 'center'}
}

var LoginScene = React.createClass({
    getInitialState: function() {
        return {styles: styles};
    },
    componentWillMount: function() {
        return this.mediaAdjust();
    },
    componentDidMount: function() {
        window.addEventListener('resize', this.mediaAdjust);
    },
    mediaAdjust: function() {
        if(window.innerWidth < breakpoints.mobile.width){
            styles.container.alignSelf = 'stretch';
        }else{
            styles.container.alignSelf = 'center';
        }
        this.setState({styles: _.cloneDeep(styles)});
    },
    render() {
        return (
            <div style={this.state.styles.container}>
                <div id="socialButtonContainer" style={this.state.styles.panelWrapper}>
                    <div id="socialButtonPanel" style={this.state.styles.panel}>
                        <Input name="email" type="email" labelType="placeholder" showLabel="false"/>
                        <Input name="password" type="password" labelType="placeholder" showLabel="false"/>
                        <Input name="username" labelType="placeholder" placeholder="for new users enter a screen name"
                               showLabel="false" />
                        <Button type="local" centerLabel="true" showIcon="false"/>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = LoginScene;