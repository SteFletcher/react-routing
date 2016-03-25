var React = require('react');
var _ = require('lodash');
var breakpoints = require('../media-breakpoints.js').breakpoints;
import { Link } from 'react-router'

var GLOBAL_WIDGET_WIDTH = 350;
let styles = {
    inputContainer: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        marginTop: 5,
        marginBottom: 5,
        width: GLOBAL_WIDGET_WIDTH
    },
    label: {
        display: 'flex',
        alignItems: 'center',
        flexGrow: 2,
        margin: 0
    },
    input: {
        marginLeft: 30,
        height: 50,
        textAlign: 'center'
    }
};

export const Input = React.createClass({
    styles: {
        inputContainer: {
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            marginTop: 5,
            marginBottom: 5,
            width: GLOBAL_WIDGET_WIDTH
        },
        label: {
            display: 'flex',
            alignItems: 'center',
            flexGrow: 2,
            margin: 0
        },
        input: {
            marginLeft: 30,
            height: 50,
            textAlign: 'center'
        }
    },

    propTypes: {
        name: React.PropTypes.string.isRequired,
        type: React.PropTypes.string
    },

    componentWillMount() {
        var placeholderText = this.props.placeholder || this.props.name;
        if (this.props.labelType == 'placeholder') {
            styles.label.display = 'none';
            styles.input.marginLeft = 0;
        }
        this.setState({placeholderText: placeholderText})
        this.setStyles();
    },


    mediaAdjust: function () {
        var styles = _.cloneDeep(this.styles);
        if(!eval(this.props.showLabel)){
            styles.label.display = 'none';
            styles.input.marginLeft = 0;
        }
        if (window.innerWidth < breakpoints.mobile.width) {
            delete styles.inputContainer.width;
        } else {
            styles.inputContainer.width = GLOBAL_WIDGET_WIDTH;
        }
        this.setState({styles: styles});
    },

    setStyles() {
        this.mediaAdjust();
    },

    componentDidMount: function () {
        window.addEventListener('resize', this.setStyles);
    },

    render() {
        return (
            <div style={styles.inputContainer}>
                <label text={this.props.name} style={this.state.styles.label}>{this.props.name} </label>
                <input type={this.props.type}
                       style={this.state.styles.input}
                       placeholder={this.state.placeholderText}
                       className="form-control"/>
            </div>
        )
    },

});
