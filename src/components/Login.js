import React, { Component, PropTypes } from 'react';
import Splash from './Splash';
import LoginForm from './LoginForm';
import Background from './Background';
import AnimatedButton from './AnimatedButton';
import SignupOptions from './SignupOptions';


export default class Login extends Component {
	static propTypes = {
    navigation: PropTypes.object.isRequired
  };

	render() {
		return (
			<Background>
				<Splash />
				<LoginForm />
				<SignupOptions {...this.props}/>
				<AnimatedButton {...this.props}/>
			</Background>
		);
	}
}
