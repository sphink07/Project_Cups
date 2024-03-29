import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const MenuButton = ({navigation}) => {
  const GotoManagement = () => {
    navigation.push('MenuList');
  };
  const GotoHomePage = () => {
    navigation.push('HomePage');
  };
  const GotoSum = () => {
    navigation.push('Total');
  };
  const GotoLogin = () => {
    Alert.alert(
      'Important..!',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {text: 'OK', onPress: () => navigation.push('Login')},
      ],
      {cancelable: false},
    );
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <LinearGradient
          colors={['#495A5C', '#31363A', '#000000']}
          style={styles.linearGradient}>
          <View style={{height: 850, alignItems: 'center'}}>
            <Image
              source={require('./img/Logo.png')}
              style={{width: 150, height: 260, marginTop: 10}}
            />
            <Text
              style={{
                fontSize: 40,
                color: '#ffffff',
                fontWeight: '400',
                marginTop: -30,
              }}>
              Cups
            </Text>
            <TouchableOpacity
              onPress={GotoHomePage}
              style={{
                marginBottom: 50,
                width: 250,
                height: 70,
                borderRadius: 10,
                marginTop: 60,
                justifyContent: 'center',
                backgroundColor: '#59b882',
              }}>
              <Text
                style={{
                  fontSize: 23,
                  color: '#ffffff',
                  textAlign: 'center',
                  fontWeight: '700',
                }}>
                Home
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={GotoSum}
              style={{
                marginBottom: 50,
                width: 250,
                height: 70,
                borderRadius: 10,
                justifyContent: 'center',
                backgroundColor: '#38ace8',
              }}>
              <Text
                style={{
                  fontSize: 23,
                  color: '#ffffff',
                  textAlign: 'center',
                  fontWeight: '700',
                }}>
                Sales Summary
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={GotoManagement}
              style={{
                marginBottom: 50,
                width: 250,
                height: 70,
                borderRadius: 10,
                justifyContent: 'center',
                backgroundColor: '#9e9e9e',
              }}>
              <Text
                style={{
                  fontSize: 23,
                  color: '#ffffff',
                  textAlign: 'center',
                  fontWeight: '700',
                }}>
                Management
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={GotoLogin}
              style={{
                width: 120,
                height: 50,
                borderRadius: 10,
                justifyContent: 'center',
                backgroundColor: '#d13030',
              }}>
              <Text
                style={{
                  fontSize: 23,
                  color: '#ffffff',
                  textAlign: 'center',
                  fontWeight: '700',
                }}>
                Loout
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MenuButton;

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
  },
});
