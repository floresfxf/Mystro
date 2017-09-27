import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  ListView,
  Alert,
  Button,
  AsyncStorage,
  FlatList,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  ListItem,
} from 'react-native';
import styles from '../Styles/styles.js';
import Hr from 'react-native-hr';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Auth0 from 'react-native-auth0';
const auth0 = new Auth0({ domain: 'myst.auth0.com', clientId: 'tLT5sj98nxMa2KTnxd5WWWHA8Ptmjf5K' });

export default class RegisterScreen extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        username: '',
        user: '',
        password: '',
        confirmPassword: '',
        city: '',
        state: '',
        hidden: true,
      }
  }

  handleSubmit(){
    if (this.state.password === this.state.confirmPassword){
      if (this.validateEmail(this.state.username)){
        // auth0
        //   .auth
        //   .createUser({email: this.state.username, username: this.state.user, password: this.state.password, connection: 'myconnection'})
        //   .then((result)=>{
        //     console.log(result);
        //   })
        //   .catch((err)=>{
        //     console.log(err);
        //   });

        // auth0
        // .webAuth
        // .authorize({scope: 'openid email', audience: 'https://myst.auth0.com/userinfo'})
        // .then(credentials =>
        //   console.log(credentials)
        //   // Successfully authenticated
        //   // Store the accessToken
        // )
        // .catch(error => console.log(error));

        // auth0.webAuth
        // .authorize({
        //   scope: 'openid profile',
        //   audience: 'https://' + 'myst.auth0.com' + '/userinfo'
        // })
        // .then(credentials => {
        //   Alert.alert(
        //     'Success',
        //     'AccessToken: ' + 'poop',
        //     [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        //     { cancelable: false }
        //   );
        //   this.setState({ accessToken: credentials.accessToken });
        // })
        // .catch(error => console.log(error));
      }else{
        Alert.alert("Invalid Email", "Invalid Email Address! Please try again.")
      }
    }else{
      Alert.alert("Password Don't Match", "You're passwords don't match! Please try again.")
    }
  }
  validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  }
  backHandler(){
    this.props.navigation.goBack()
  }
  render() {
    const match = (this.state.password === this.state.confirmPassword);
    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <KeyboardAwareScrollView contentContainerStyle={styles.loginContainer}>
            <Image
                source={require('../../images/mystro.png')}
                style={styles.big_icon}
            />
            <Text style={styles.textBig}>Mystro Registration</Text>
            <TextInput placeholder={"Enter Email Address"}
                returnKeyType={'next'}
                keyboardType={'email-address'}
                onChangeText={(text)=>this.setState({ username: text })} onSubmitEditing={(event) => { this.refs.SecondInput.focus(); }}
                autoFocus={true} autoCorrect={false} style={styles.textBox}/>

            <Hr lineColor={'#DCDCDC'} />

            <TextInput placeholder={"Enter Username"} ref='SecondInput'
                returnKeyType={'next'}
                onChangeText={(text)=>this.setState({ user: text })} onSubmitEditing={(event) => { this.refs.ThirdInput.focus(); }}
                autoFocus={true} autoCorrect={false} style={styles.textBox}/>

            <Hr lineColor={'#DCDCDC'} />

            <TextInput placeholder={ "Enter Password" } ref='ThirdInput'
                onChangeText={(text)=>this.setState({ password: text })}
                onSubmitEditing={(event) => { this.refs.FourthInput.focus(); }}
                returnKeyType={'next'} autoCorrect={false} style={styles.textBox} secureTextEntry={ this.state.hidden } selectTextOnFocus={true}  />

            <Hr lineColor={'#DCDCDC'} />

            <TextInput placeholder={"Verify Password"} ref='FourthInput'
                autoCorrect={false} returnKeyType={'next'}                      secureTextEntry={ this.state.hidden } selectTextOnFocus={true} onChangeText={(text)=>this.setState({ confirmPassword: text })} onSubmitEditing={(event) => { this.refs.FifthInput.focus(); }}
                style={ match ? styles.textBox : styles.textBoxWrong }/>

            <Hr lineColor={'#DCDCDC'} />

            <TouchableOpacity style={ styles.pwdbutton }
                onPress={ () => this.setState({ hidden: !this.state.hidden })}>
                <Text style={ styles.smallButtonLabel }>
                    Show Password
                </Text>
            </TouchableOpacity>

            <TextInput placeholder={"City"}
                returnKeyType={'next'} ref='FifthInput'
                onChangeText={ (text)=>this.setState({city:text}) }
                onSubmitEditing={(event) => { this.refs.SixthInput.focus(); }}          style={ styles.textBox } autoCorrect={false}/>

            <Hr lineColor={'#DCDCDC'} />

            <TextInput placeholder={"State"} ref='SixthInput'
                autoCorrect={false} returnKeyType={'join'}
                autoCapitalize={'characters'} maxLength={2} onChangeText={(text)=>this.setState({ state: text })}           onSubmitEditing={ this.handleSubmit.bind(this) }
                style={ styles.textBox }  />

            <Hr lineColor={'#DCDCDC'} />

            <TouchableOpacity onPress={ this.handleSubmit.bind(this) }
                style={ [styles.button, styles.buttonBlue] }>
                <Text style={styles.buttonLabel}>
                    Register
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ this.backHandler.bind(this) }
                style={ [styles.button, styles.buttonGreen] }>
                <Text style={styles.buttonLabel}>
                    Login
                </Text>
            </TouchableOpacity>

        </KeyboardAwareScrollView>

    </TouchableWithoutFeedback>

    )
  }
}
