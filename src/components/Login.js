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
	toRegister(){
		this.props.navigation.navigate('Register')
	}
	render() {
		console.log(this.props);
		return (
			<Background>
				<Splash />
				<LoginForm />
				<SignupOptions toRegister={this.toRegister.bind(this)}/>
				<AnimatedButton {...this.props}/>
			</Background>
		);
	}
}
