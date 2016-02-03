var React = require('react');
var lightenDarken = require('./lightendarken.jsx').LightenDarkenColor;
var _ = require('lodash');
// flexbox styles center text inside of button
var flexboxStyles = {
    title: {
        color: 'white'
    },
    google: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '400px',
        height: '50px',
        backgroundColor: '#D50F25'
    },
    facebook: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '400px',
        height: '50px',
        backgroundColor: '#3b5998'
    }

};

var SocialButton = React.createClass({
    getInitialState() {
        return {
            clicked: false,
            mouseDown: false,
            backgroundColor: null
        }
    },

    onClick() {
        this.setState({mouseDown: !this.state.mouseDown});
        if(this.state.mouseDown){
            this.setStyles();
        }else{
            var newStyle = _.cloneDeep(flexboxStyles[this.props.type]);
            newStyle.backgroundColor = lightenDarken(newStyle.backgroundColor, -20);
            this.setState({buttonStyle: newStyle});
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
        if(this.props.type == "facebook"){
            this.setState({buttonText: "Facebook Login", buttonStyle: flexboxStyles.facebook})
        } else if(this.props.type == "google"){
            this.setState({buttonText: "Google Login", buttonStyle: flexboxStyles.google})
        }
    },

    render() {
        return (
            <div style={this.state.buttonStyle} 
                    onMouseDown={this.onClick}
                    onMouseUp={this.onClick}>
                <div style={flexboxStyles.title}>{this.state.buttonText}</div>
            </div>
        )
    },


});

module.exports = SocialButton;