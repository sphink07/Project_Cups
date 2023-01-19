import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {useState, useEffect ,} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';

const Menu_list = ({navigation}) => {
  const GotoAdd = () => {
    navigation.navigate('Add');
  };
  const renderlist = ({item}) => (
    <View style={{flexDirection: 'row' ,}}>
      <Text style={{
        flex: 0.5,
        marginEnd: 10,
        marginBottom : 20,
        fontSize: 25,
        color: 'white',
        fontWeight: '700',
      }}>{item.Name}</Text>
      <Text style={{
        flex:0.4,
        fontSize: 25,
        color: 'yellow',
        fontWeight: '700',
      }}>{item.Price}</Text>
      <TouchableOpacity
      style={{flex:0.1 , alignItems:"center" , marginEnd:10}}
      >
      <Image
        source={require('./img/crayon.png')}
        style={{width: 25, height: 30}}
      />
      </TouchableOpacity>
      <TouchableOpacity
      style={{flex:0.1 , alignItems:"center"}}
      >
      <Image
        source={require('./img/delete.png')}
        style={{width: 25, height: 30}}
      />
      </TouchableOpacity>
    </View>
  );

  

  const [Dataformapi, setDataformapi] = useState([]);

  const APIreq = () => {
    let url =
    'https://script.google.com/macros/s/AKfycbzig08EL0EQ3dUsGsWoe5Rqmw5FdWicvJHxyRhwWk9pyytV9xCGYHVxGFNwyJ_Rgriw/exec?action=GetProduct';
  axios
    .post(url , '')
    .then(res => setDataformapi(res.data))
    .catch(err => console.log(err));
  }

  useEffect(() => {
     APIreq();
  }, [Dataformapi]);




  return (
    <ScrollView nestedScrollEnabled={ true } style={{ width: "100%" }}>
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
          
            <View
              style={{
                padding:15,
                backgroundColor: 'gray',
                height: 680,
                width: '93%',
                marginLeft: 12.5,
                marginTop: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
            <ScrollView nestedScrollEnabled={true} style={{ width: "100%" }}>
              <FlatList 
              data={Dataformapi} 
              renderItem={renderlist}
              extraData={Dataformapi}
              >
              </FlatList>
            </ScrollView>
            </View>
          
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
            onPress={GotoAdd}
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
