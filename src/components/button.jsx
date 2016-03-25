var React = require('react');
var _ = require('lodash');
var lightenDarken = require('../utils/lightendarken.jsx').LightenDarkenColor;
var breakpoints = require('../media-breakpoints.js').breakpoints;
import { Link } from 'react-router'

// flexbox styles center text inside of button
var flexboxStyles = {
    textContainer: {
        // backgroundColor: 'green',
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        marginLeft: '10',
        marginRight: '10',
        borderLeft: '1',
        fontSize: '18'
    },
    buttonContentContainer: {
        color: 'white',
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        marginLeft: '20',
        marginRight: '10',
        alignContent: 'stretch'
    },
    google: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        //width: '100%',
        height: '55px',
        marginTop: '5',
        marginBottom: '5',
        backgroundColor: '#D50F25',
        borderRadius: '5',
        boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.25)',
        textShadow: '0 1px 0 rgba(0, 0, 0, 0.3)',
        lineHeight: '0'
    }
};


flexboxStyles.facebook = _.cloneDeep(flexboxStyles.google);
flexboxStyles.facebook.backgroundColor = '#3b5998';

flexboxStyles.local = _.cloneDeep(flexboxStyles.google);
flexboxStyles.local.backgroundColor = '#e82c0c';


export const Button = React.createClass({
    getInitialState() {
        return {
            clicked: false,
            mouseDown: false,
            backgroundColor: null,
            buttonStyle: flexboxStyles.local,
            link: this.props.link || '/notset'
        }
    },

    onClick() {
        this.setState({
            mouseDown: !this.state.mouseDown
        });
        if (this.state.mouseDown) {
            this.setStyles();
        } else {
            var newStyle = _.cloneDeep(flexboxStyles[this.props.type]);
            newStyle.backgroundColor = lightenDarken(newStyle.backgroundColor, -20);
            this.setState({
                buttonStyle: newStyle
            });
        }
    },

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    },

    propTypes: {
        type: React.PropTypes.string.isRequired,
        link: React.PropTypes.string
    },

    componentWillMount() {
        //this.setState({link: this.props.link});
        this.setStyles();
    },

    setStyles() {
        if(!eval(this.props.showIcon)){
            this.setState({iconDisplay: {display: 'none'}})
        }
        if (this.props.type == "facebook") {
            this.setState({
                iconClass: "fa fa-facebook fa-2x",
                buttonText: "Login with Facebook",
                buttonStyle: flexboxStyles.facebook
            })
        } else if (this.props.type == "google") {
            this.setState({
                iconClass: "fa fa-google fa-2x",
                buttonText: "Login with Google",
                buttonStyle: flexboxStyles.google
            })
        } else if (this.props.type == "local") {
            this.setState({
                iconClass: "fa fa-sign-in fa-2x",
                buttonText: "Login",
                buttonStyle: flexboxStyles.local
            })
        }
        this.mediaAdjust();
    },
    componentDidMount: function() {
        window.addEventListener('resize', this.setStyles);
    },

    mediaAdjust: function() {
        var styles =  _.cloneDeep(flexboxStyles.textContainer);
        if(window.innerWidth < breakpoints.mobile.width
            ||  this.props.centerLabel ){
            styles.justifyContent = 'center';
        }else{
            styles.justifyContent = 'flex-start';
        }
        this.setState({textContainer: styles});
    },

    render() {
        return (
            <div style={this.state.buttonStyle} 
                    onMouseDown={this.onClick}
                    onMouseUp={this.onClick}>
                <div style={flexboxStyles.buttonContentContainer}>
                    <i style={this.state.iconDisplay} className={this.state.iconClass}></i>
                    <div style={this.state.textContainer}>
                        <Link to={this.state.link} style={
                                {
                                    textDecoration: 'none',
                                    color: 'inherit'
                                }
                            }>
                            <span>{this.state.buttonText}</span>
                        </Link>

                    </div>
                </div>

            </div>
        )
    },


});

//module.exports = SocialButton;