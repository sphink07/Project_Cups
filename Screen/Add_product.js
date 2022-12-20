import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';

const Add_product = () => {
  const [Name, setName] = useState('');
  const [Price, setPrice] = useState('');
  const Submit = () =>
    // axios({
    //     method : 'POST' ,
    //     url : '/https://script.google.com/macros/s/AKfycbzig08EL0EQ3dUsGsWoe5Rqmw5FdWicvJHxyRhwWk9pyytV9xCGYHVxGFNwyJ_Rgriw/exec' ,
    //     data: {
    //       Name : `${Name}`,
    //       Price : `${Price}`,
    //     },
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(JSON.stringify(error));
    //   });
    {
    let url = "https://script.google.com/macros/s/AKfycbzig08EL0EQ3dUsGsWoe5Rqmw5FdWicvJHxyRhwWk9pyytV9xCGYHVxGFNwyJ_Rgriw/exec";
    const data = { Name: `${Name}`, Price:`${Price}` };
    axios
    .post(url, JSON.stringify(data))
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));}

  return (
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
      <View style={{flexDirection: 'row', marginTop: 100}}>
        <TouchableOpacity
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
  );
};

export default Add_product;

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    alignItems: 'center',
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
