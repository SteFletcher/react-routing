var React = require('react');

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
        height: '100px',
        backgroundColor: '#D50F25'
    },
    facebook: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '400px',
        height: '100px',
        backgroundColor: '#3b5998'
    }

};

var SocialButton = React.createClass({

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    },

    propTypes: {
        type: React.PropTypes.string.isRequired
    },

    componentWillMount() {
        if(this.props.type == "facebook"){
            this.setState({buttonText: "Facebook Login", buttonStyle: "facebook"})
        } else if(this.props.type == "google"){
            this.setState({buttonText: "Google Login", buttonStyle: "google"})
        }
    },

    render() {
        return (
            <div style={flexboxStyles[this.state.buttonStyle]}>
                <div style={flexboxStyles.title}>{this.state.buttonText}</div>
            </div>
        )
    },


});

module.exports = SocialButton;