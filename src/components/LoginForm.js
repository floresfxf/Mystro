import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	KeyboardAvoidingView,
	View,
	ActivityIndicator,
	TouchableOpacity,
	Image,
} from 'react-native';
import Auth0 from 'react-native-auth0';
const auth0 = new Auth0({ domain: 'myst.auth0.com', clientId: 'tLT5sj98nxMa2KTnxd5WWWHA8Ptmjf5K' });

import User from './User';
import AnimatedButton from './AnimatedButton.js';
import SignupOptions from './SignupOptions';

import usernameImg from '../../images/user.png';
import passwordImg from '../../images/pass.png';
import eyeImg  from '../../images/eye.png';

export default class Form extends Component {
	constructor(props) {
    super(props);
    this.state = {
			showPass: true,
			press: false,
		};
		this.showPass = this.showPass.bind(this);
	}

	showPass() {
  this.state.press === false ? this.setState({ showPass: false, press: true }) :this.setState({ showPass: true, press: false });
  }
	_onLogin = () => {
		auth0
    .auth
    .passwordRealm({username: "info@auth0.com", password: "password", realm: "myconnection"})
    .then(console.log)
    .catch(console.error);
    // auth0.webAuth
    //   .authorize({
    //     scope: 'openid profile',
    //     audience: 'https://' + credentials.domain + '/userinfo'
    //   })
    //   .then(credentials => {
    //     Alert.alert(
    //       'Success',
    //       'AccessToken: ' + credentials.accessToken,
    //       [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
    //       { cancelable: false }
    //     );
    //     this.setState({ accessToken: credentials.accessToken });
    //   })
    //   .catch(error => console.log(error));
  };

  _onLogout = () => {
    if (Platform.OS === 'android') {
      this.setState({ accessToken: null });
    } else {
      auth0.webAuth
        .clearSession({})
        .then(success => {
          this.setState({ accessToken: null });
        })
        .catch(error => console.log(error));
    }
  };

	render() {
		return (
			<KeyboardAvoidingView behavior='padding'
				style={styles.container}>
				<User source={usernameImg}
					placeholder='Username'
					autoCapitalize={'none'}
					returnKeyType={'done'}
					autoCorrect={false} />
				<User source={passwordImg}
					secureTextEntry={this.state.showPass}
					placeholder='Password'
					returnKeyType={'done'}
					autoCapitalize={'none'}
					autoCorrect={false} />
					<TouchableOpacity
						activeOpacity={0.7}
						style={styles.btnEye}
						onPress={this.showPass}
					>
						<Image source={eyeImg} style={styles.iconEye} />
					</TouchableOpacity>
			</KeyboardAvoidingView>
		);
	}
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	btnEye: {
    position: 'absolute',
    top: 55,
    right: 28,
  },
  iconEye: {
    width: 25,
    height: 25,
    tintColor: 'rgba(0,0,0,0.2)',
  },
});
