var React = require('react');
var lightenDarken = require('../utils/lightendarken.jsx').LightenDarkenColor;
var _ = require('lodash');
// flexbox styles center text inside of button
var flexboxStyles = {
    title: {
        color: 'white'
    },
    google: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '400px',
        height: '50px',
        backgroundColor: '#D50F25'
    }
};


flexboxStyles.facebook = _.cloneDeep(flexboxStyles.google);
flexboxStyles.facebook.backgroundColor = '#3b5998';

flexboxStyles.local = _.cloneDeep(flexboxStyles.google);
flexboxStyles.local.backgroundColor = '#e82c0c';


var SocialButton = React.createClass({
    getInitialState() {
        return {
            clicked: false,
            mouseDown: false,
            backgroundColor: null
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
        type: React.PropTypes.string.isRequired
    },

    componentWillMount() {
        this.setStyles();
    },

    setStyles() {
        if (this.props.type == "facebook") {
            this.setState({
                iconClass: "fa fa-facebook fa-2x",
                buttonText: "Facebook Login",
                buttonStyle: flexboxStyles.facebook
            })
        } else if (this.props.type == "google") {
            this.setState({
                iconClass: "fa fa-google fa-2x",
                buttonText: "Google Login",
                buttonStyle: flexboxStyles.google
            })
        } else if (this.props.type == "local") {
            this.setState({
                iconClass: "fa fa-sign-in fa-2x",
                buttonText: "Login",
                buttonStyle: flexboxStyles.local
            })
        }
    },

    render() {
        return (
            <div style={this.state.buttonStyle} 
                    onMouseDown={this.onClick}
                    onMouseUp={this.onClick}>
                <div style={flexboxStyles.title}>
                    <i className={this.state.iconClass}></i>
                </div>

            </div>
        )
    },


});

module.exports = SocialButton;