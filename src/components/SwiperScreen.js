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
  }

})
// @connect(
//   state => ({
//     preferences: state.prefs
//   }),
//   dispatch => bindActionCreators(PrefActions, dispatch)
// )

export default class SwiperScreen extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={false} loop={false}>
        <View style={styles.slide1}>
          <View style={styles.slideWrapper}>
            <Text style={styles.text}>How far will you drive for a pickup?</Text>
            <View style={styles.btnGrp}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>5   Minutes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>10 Minutes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>20 Minutes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>Any</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.slideWrapper}>
            <Text style={styles.text}>What's the lowest passenger rating you'll accept?</Text>
            <View style={styles.btnGrp}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>4.5</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>4.0</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>3.5</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>Any</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.slide2}>
          <View style={styles.slideWrapper}>
            <Text style={styles.text}>Which app should always be active?</Text>
            <View style={styles.btnGrp}>
              <TouchableOpacity style={styles.btnUber}>
                <Image
                  style={styles.btnUber}
                  source={require('../../images/uber.jpg')}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnLyft}>
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
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>Always</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>After 5 minutes of no rides</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>After 10 minutes of no rides</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>After 20 minutes of no rides</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.slide3}>
          <View style={styles.slideWrapper}>
            <Text style={styles.text}>Do you want rides from carpool services?</Text>
            <View style={styles.btnGrp}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Swiper>
    )
  }
}
