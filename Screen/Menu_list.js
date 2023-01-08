import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';

const Menu_list = () => {

  const renderlist = ({item}) => (
    <View style={{flexDirection: 'row'}}>
      <Text style={{marginEnd: 10}}>{item.Name}</Text>
      <Text>{item.Price}</Text>
    </View>
  );

  const [Dataformapi, setDataformapi] = useState([]);
  useEffect(() => {
    let url =
      'https://script.google.com/macros/s/AKfycbzig08EL0EQ3dUsGsWoe5Rqmw5FdWicvJHxyRhwWk9pyytV9xCGYHVxGFNwyJ_Rgriw/exec?action=GetProduct';
    axios
      .post(url , '')
      .then(res => setDataformapi(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <ScrollView>
      <LinearGradient
        colors={['#495A5C', '#31363A', '#000000']}
        style={styles.linearGradient}>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 350,
            marginTop: 30,
            borderRadius: 10,
          }}>
          <ScrollView>
            <View
              style={{
                backgroundColor: 'gray',
                height: 680,
                width: '93%',
                marginLeft: 12.5,
                marginTop: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <FlatList data={Dataformapi} renderItem={renderlist}></FlatList>
            </View>
          </ScrollView>
        </View>
        <View style={{flexDirection: 'row', marginTop: 40, marginBottom: 50}}>
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
  );
};

export default Menu_list;

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
  },
});
