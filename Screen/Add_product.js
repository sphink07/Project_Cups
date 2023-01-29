import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';


const Add_product = ({navigation}) => {
  const GotoMenu = () => {
    navigation.push('MenuList');
  };
  const [Name, setName] = useState('');
  const [Price, setPrice] = useState('');
  const [List, setList] = useState([]);

  const Submit = async () => {
    if(Name == '' || Price == ''){
      Alert.alert("Error","incomplete information")
    } else {
      let count = List.length - 1
      let result = parseInt(List[ count ].Id) + 1
      let url =
        'https://script.google.com/macros/s/AKfycbzig08EL0EQ3dUsGsWoe5Rqmw5FdWicvJHxyRhwWk9pyytV9xCGYHVxGFNwyJ_Rgriw/exec?action=addUser';
      const data = {Id: `${result}`, Name: `${Name}`, Price: `${Price}`};
      await axios 
        .post(url, JSON.stringify(data))
        .then(res => console.log(res.data))
        .then(
          setTimeout(() => {
            GotoMenu()
          }, 2500),
          alert("seccess")
        )
        .catch(err => console.log(err));
    }
  };

  const GetData = () =>{
    let url =
    'https://script.google.com/macros/s/AKfycbzig08EL0EQ3dUsGsWoe5Rqmw5FdWicvJHxyRhwWk9pyytV9xCGYHVxGFNwyJ_Rgriw/exec?action=GetProduct';
  axios
    .post(url, '')
    .then(res => setList(res.data))
    .catch(err => console.log(err));
     console.log(`Stay Add Page`)
  }

  useEffect(() => {
    GetData()
  }, []);

  return (
    <ScrollView>
      <LinearGradient
        colors={['#495A5C', '#31363A', '#000000']}
        style={styles.linearGradient}>
        <Image
          source={require('./img/add.png')}
          style={{width: 200, height: 200, marginTop: 100}}></Image>
        <Text
          style={{
            marginTop: 100,
            marginEnd: 250,
            marginBottom: 10,
            color: '#ffffff',
            fontWeight: '500',
            fontSize: 18,
          }}>
          Name
        </Text>
        <TextInput
          style={styles.TextInput}
          placeholder={'Enter name'}
          onChangeText={text => setName(text)}></TextInput>
        <Text
          style={{
            marginTop: 40,
            marginEnd: 250,
            marginBottom: 10,
            color: '#ffffff',
            fontWeight: '500',
            fontSize: 18,
          }}>
          Price
        </Text>
        <TextInput
          style={styles.TextInput}
          placeholder={'Enter price'}
          keyboardType="numeric"
          onChangeText={text => setPrice(text)}></TextInput>
        <View style={{flexDirection: 'row', marginTop: 100, marginBottom: 90}}>
          <TouchableOpacity
            onPress={GotoMenu}
            style={{
              width: 120,
              height: 50,
              borderRadius: 10,
              justifyContent: 'center',
              backgroundColor: '#9e9e9e',
            }}>
            <Text
              style={{
                fontSize: 20,
                textAlign: 'center',
                fontWeight: '700',
                color: '#ffffff',
              }}>
              Back
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={Submit}
            style={{
              marginStart: 40,
              width: 120,
              height: 50,
              borderRadius: 10,
              justifyContent: 'center',
              backgroundColor: '#3fad00',
            }}>
            <Text
              style={{
                fontSize: 20,
                textAlign: 'center',
                fontWeight: '700',
                color: '#ffffff',
              }}>
              Comfirm
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default Add_product;

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextInput: {
    fontSize: 20,
    color: '#000000',
    fontWeight: '500',
    backgroundColor: '#ffffff',
    width: 300,
    height: 50,
    borderRadius: 10,
    padding: 10,
  },
});
