import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Login = ({navigation}) => {
  const Alert = () => {
    navigation.push('MenuList');
  };
  return (
    <ScrollView>
    <LinearGradient
      colors={['#495A5C', '#31363A', '#000000']}
      style={styles.linearGradient}>
      <Image
        source={require('./img/Logo.png')}
        style={{width: 220, height: 250, marginTop: 70}}
      />
      <Text style={{fontSize: 65, color: '#ffffff', fontWeight: '500'}}>
        Cups
      </Text>
      <Text
        style={{
          fontSize: 20,
          color: '#ffffff',
          fontWeight: '500',
          marginTop: 40,
          marginEnd: 200,
        }}>
        Username
      </Text>
      <TextInput
        placeholder={'Enter username'}
        style={{
          backgroundColor: '#ffffff',
          padding: 10,
          fontSize: 20,
          height: 50,
          width: 300,
          marginTop: 10,
          borderRadius: 10,
        }}></TextInput>
      <Text
        style={{
          fontSize: 20,
          color: '#ffffff',
          fontWeight: '500',
          marginTop: 20,
          marginEnd: 200,
        }}>
        Password
      </Text>
      <TextInput
        placeholder={'Enter password'}
        secureTextEntry={true}
        style={{
          backgroundColor: '#ffffff',
          padding: 10,
          fontSize: 20,
          height: 50,
          width: 300,
          marginTop: 10,
          borderRadius: 10,
        }}></TextInput>
      <TouchableOpacity
        onPress={Alert}
        style={{
          marginBottom : 102,
          width: 120,
          height: 50,
          borderRadius: 10,
          marginTop: 50,
          justifyContent: 'center',
          backgroundColor: '#9e9e9e',
        }}>
        <Text style={{fontSize: 20, textAlign: 'center', fontWeight: '700'}}>
          Login
        </Text>
      </TouchableOpacity>
    </LinearGradient>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
  },
});
