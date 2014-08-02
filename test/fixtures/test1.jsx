require('css!../styles/swa-flag');

var React = require('react'),
	ReactMixins = require('components/react-mixins/swa-react-mixins');

module.exports = React.createClass({

	classPrefix : 'swa-flag',
	innerClass: 'swa-flag--inner',

	mixins: [ReactMixins], 

	getClasses: function(){
		var classes = {};
		classes[this.classPrefix] = true
		classes[this.classPrefix+'_'+this.props.type] = true;
		return this.cx(classes);
	},
	
    render: function() {
		return this.transferPropsTo(
        	<span className={this.getClasses()}><span className={this.innerClass}>{this.props.text}</span></span>
    	);
    }
});

