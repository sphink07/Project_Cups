import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';

const Loader = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject , styles.container]}>
      <LottieView source={require('./img/loader.json')} autoPlay loop/>
    </View>
  )
}

export default Loader

const styles = StyleSheet.create({
container:{
    justifyContent:'center',
    alignItems:"center",
    backgroundColor:'rgba(0,0,0,0.6)',
    zIndex:1 ,
},


})