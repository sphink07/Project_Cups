import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {SelectList} from 'react-native-dropdown-select-list';
import {SafeAreaView} from 'react-native-safe-area-context';

const Login = ({navigation}) => {
  const Alert = () => {
    navigation.push('MenuList');
  };

  // data of dropdownlist
  const [Month, setMonth] = useState([
    {key: 'JAN', value: 'January'},
    {key: 'FEB', value: 'February'},
    {key: 'MAR', value: 'March'},
    {key: 'APR', value: 'April'},
    {key: 'MAY', value: 'May'},
    {key: 'JUN', value: 'June'},
    {key: 'JUL', value: 'July'},
    {key: 'AUG', value: 'August'},
    {key: 'SEP', value: 'September'},
    {key: 'OCT', value: 'October'},
    {key: 'NOV', value: 'November'},
    {key: 'DEC', value: 'December'},
  ]);
  return (
    <SafeAreaView>
      <ScrollView>
        <LinearGradient
          colors={['#495A5C', '#31363A', '#000000']}
          style={styles.linearGradient}>
          <View style={{height: 850}}>
            <View
              style={{
                margin:15,
                padding:15,
                backgroundColor:'white',
                justifyContent: 'space-around',
                alignItems: 'center',
                borderRadius:15,
              }}>
              <SelectList
                save="value"
                search={false}
                data={Month}
                dropdownStyles={{backgroundColor: 'white'}}
                boxStyles={{
                  backgroundColor: 'white',
                  width: 350,
                  height: 50,
                  borderWidth: 1,
                  borderColor: 'black',
                  borderRadius: 15,
                }}
              />
              <View style={{flexDirection:'row' , alignItems:'center'}}>
                <Text
                  style={{
                    marginTop: 10,
                    fontSize: 25,
                    fontWeight: '500',
                    color:'#505050'
                  }}>
                  Qty : 1203<Text style={{}}></Text>
                </Text>
                <Text
                  style={{
                    marginTop: 10,
                    fontSize: 25,
                    marginLeft: 20,
                    fontWeight: '500',
                    color:'#505050'
                  }}>
                  Total :<Text style={{}}>10000</Text>
                </Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
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
