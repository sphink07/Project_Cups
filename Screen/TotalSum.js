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

const TotalSum = ({navigation}) => {
  const GotoMenuButton = () => {
    navigation.push('MenuButton');
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
          <View style={{height: 850, alignItems: 'center'}}>
            <View
              style={{
                margin: 15,
                padding: 25,
                backgroundColor: '#909090',
                justifyContent: 'space-around',
                alignItems: 'center',
                borderRadius: 15,
              }}>
              <SelectList
                save="value"
                search={false}
                data={Month}
                dropdownStyles={{backgroundColor: 'white'}}
                boxStyles={{
                  backgroundColor: 'white',
                  width: 300,
                  height: 50,
                  borderWidth: 1,
                  borderColor: 'black',
                  borderRadius: 15,
                }}
              />
              <View
                style={{
                  backgroundColor:'#303030',
                  alignItems: 'center',
                  borderColor: 'black',
                  borderWidth: 1,
                  justifyContent:'center',
                  borderRadius:15,
                  marginTop:10,
                  width:298
                }}>
                <Text
                  style={{
                    padding:5,
                    fontSize: 25,
                    fontWeight: '500',
                    color: 'white',
                  }}>
                  Total :<Text style={{color:'lime'}}>10000</Text>
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#909090',
                height: 600,
                width: 350,
                borderRadius: 10,
              }}></View>
            <TouchableOpacity
              onPress={GotoMenuButton}
              style={{
                backgroundColor: 'white',
                height: 50,
                width: 130,
                marginTop: 15,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 20, fontWeight: '600'}}>Back</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TotalSum;

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
  },
});
