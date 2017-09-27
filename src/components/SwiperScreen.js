import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
//import * as PrefActions from '../actions/preferences';


import Swiper from 'react-native-swiper';

var styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btnGrp: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  btn: {
    width: 75,
    height: 75,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnUber: {
    width: 75,
    height: 75,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnLyft: {
    width: 80,
    height: 80,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnTxt:{
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  slideWrapper: {
    margin: 5,
    marginTop:10,
    marginBottom: 20,
    flex:1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  btnSubmit: {
    width: 350,
    height: 75,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  },

})

class SwiperScreen extends Component {
  handleSubmit(){
    console.log(this.props.prefs) //Attach this to the users Metadata in Autho0
  }
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={false} loop={false}>
        <View style={styles.slide1}>
          <View style={styles.slideWrapper}>
            <Text style={styles.text}>How far will you drive for a pickup?</Text>
            <View style={styles.btnGrp}>
              <TouchableOpacity style={styles.btn} onPress={this.props.onDistanceInput.bind(this,5)}>
                <Text style={styles.btnTxt}>5   Minutes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={this.props.onDistanceInput.bind(this,10)}>
                <Text style={styles.btnTxt}>10 Minutes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={this.props.onDistanceInput.bind(this,20)}>
                <Text style={styles.btnTxt}>20 Minutes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={this.props.onDistanceInput.bind(this,0)}>
                <Text style={styles.btnTxt}>Any</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.slideWrapper}>
            <Text style={styles.text}>What's the lowest passenger rating you'll accept?</Text>
            <View style={styles.btnGrp}>
              <TouchableOpacity style={styles.btn} onPress={this.props.onRatingInput.bind(this,4.5)}>
                <Text style={styles.btnTxt}>4.5</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={this.props.onRatingInput.bind(this,4)}>
                <Text style={styles.btnTxt}>4.0</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={this.props.onRatingInput.bind(this,3.5)}>
                <Text style={styles.btnTxt}>3.5</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={this.props.onRatingInput.bind(this,0)}>
                <Text style={styles.btnTxt}>Any</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.slide2}>
          <View style={styles.slideWrapper}>
            <Text style={styles.text}>Which app should always be active?</Text>
            <View style={styles.btnGrp}>
              <TouchableOpacity style={styles.btnUber} onPress={this.props.onServiceInput.bind(this,'uber')}>
                <Image
                  style={styles.btnUber}
                  source={require('../../images/uber.jpg')}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnLyft} onPress={this.props.onServiceInput.bind(this,'lyft')}>
                <Image
                  style={styles.btnLyft}
                  source={require('../../images/lyft.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.slideWrapper}>
            <Text style={styles.text}>And when should the other come online?</Text>
            <View style={styles.btnGrp}>
              <TouchableOpacity style={styles.btn} onPress={this.props.onOtherServiceTimeInput.bind(this,0)}>
                <Text style={styles.btnTxt}>Always</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={this.props.onOtherServiceTimeInput.bind(this,5)}>
                <Text style={styles.btnTxt}>After 5 minutes of no rides</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={this.props.onOtherServiceTimeInput.bind(this,10)}>
                <Text style={styles.btnTxt}>After 10 minutes of no rides</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={this.props.onOtherServiceTimeInput.bind(this,20)}>
                <Text style={styles.btnTxt}>After 20 minutes of no rides</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.slide3}>
          <View style={styles.slideWrapper}>
            <Text style={styles.text}>Do you want rides from carpool services?</Text>
            <View style={styles.btnGrp}>
              <TouchableOpacity style={styles.btn} onPress={this.props.onCarpoolInput.bind(this,true)}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={this.props.onCarpoolInput.bind(this,false)}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.btnSubmit} onPress={this.handleSubmit.bind(this)}>
              <Text style={styles.btnTxt}>Submit Driver Settings</Text>
            </TouchableOpacity>
          </View>

        </View>
      </Swiper>
    )
  }
}

const mapStateToProps = (state) => ({
   prefs: state.prefs,
});

const mapDispatchToProps = (dispatch) => ({
   onDistanceInput: (distance) => dispatch({type: 'ADD_DISTANCE', distance}),
   onRatingInput: (rating)=> dispatch({type: 'ADD_RATING', rating}),
   onServiceInput: (name)=> dispatch({type: 'ADD_SERVICE', name}),
   onOtherServiceTimeInput: (time)=> dispatch({type: 'ADD_SERVICE_TIME', time}),
   onCarpoolInput: (carpool)=> dispatch({type: 'ADD_CARPOOL', carpool}),
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SwiperScreen);
