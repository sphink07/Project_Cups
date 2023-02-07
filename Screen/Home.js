import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <LinearGradient
          colors={['#495A5C', '#31363A', '#000000']}
          style={styles.linearGradient}>
          <View style={{height: 850, alignItems: 'center'}}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  borderWidth: 2,
                  height: 70,
                  width: 160,
                  marginTop: 30,
                  marginRight: 10,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor: '#10c16b',
                  backgroundColor: '#353535',
                }}>
                <Text style={{fontSize: 15, color: 'white'}}>Quantity :</Text>
              </View>
              <View
                style={{
                  borderWidth: 2,
                  height: 70,
                  width: 160,
                  marginTop: 30,
                  marginLeft: 10,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor: '#10c16b',
                  backgroundColor: '#353535',
                }}>
                <Text style={{fontSize: 15, color: 'white'}}>Total :</Text>
              </View>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: '#10c16b',
                height: 45,
                width: 335,
                marginTop: 20,
                borderRadius: 10,
                justifyContent:'center' , alignItems:'center'
              }}>
                <Text style={{color:'white', fontSize:22}}>Select Product</Text>
            </TouchableOpacity>
            <ScrollView nestedScrollEnabled={true} style={{width: '100%'}}>
                <View>{}</View>
              </ScrollView>
            </View>
          <View style={{flexDirection: 'row',  marginBottom: 50}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#9e9e9e',
                width: 120,
                height: 50,
                borderRadius: 10,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'white',
                  fontWeight: '700',
                  textAlign: 'center',
                }}>
                Back
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#3fad00',
                width: 120,
                height: 50,
                borderRadius: 10,
                justifyContent: 'center',
                marginLeft: 40,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'white',
                  fontWeight: '700',
                  textAlign: 'center',
                }}>
                Add data
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
  },
});
