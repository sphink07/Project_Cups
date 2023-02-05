import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import Loader from './Loader';

const Menu_list = ({navigation}) => {
  const GotoAdd = () => {
    navigation.push('Add');
  };

  // const ItemView = ({item}) => (
  //   <View style={{flexDirection: 'row'}}>
  //     <Text
  //       style={{
  //         flex: 0.5,
  //         marginEnd: 10,
  //         marginBottom: 20,
  //         fontSize: 25,
  //         color: 'white',
  //         fontWeight: '700',
  //       }}>
  //       {item.Name}
  //     </Text>
  //     <Text
  //       style={{
  //         flex: 0.4,
  //         fontSize: 25,
  //         color: 'yellow',
  //         fontWeight: '700',
  //       }}>
  //       {item.Price}
  //     </Text>
  //     <TouchableOpacity
  //       onPress={() => AlertForDelete(item.Id)}
  //       style={{flex: 0.1, alignItems: 'center'}}>
  //       <Image
  //         source={require('./img/delete.png')}
  //         style={{width: 25, height: 30}}
  //       />
  //     </TouchableOpacity>
  //   </View>
  // );
  // check flatListRenderItem
  const CheckFlatListRenderItem = () => {
    if (Dataformapi.length > 0) {
      return Dataformapi.map((item, index) => {
        return (
          <View
            style={{
              flexDirection: 'row',
              backgroundColor:'black',
              borderColor: 'black',
              borderRadius:10,
              borderWidth: 0.7,
              justifyContent:'center',
              alignItems:'center',
              marginBottom:5,
              padding:15
            }}
            key={index}>
            <Text
              style={{
                flex: 0.5,
                fontSize: 25,
                color: 'white',
                fontWeight: '700',
              }}>
              {item.Name}
            </Text>
            <Text
              style={{
                flex: 0.4,
                fontSize: 25,
                color: 'yellow',
                fontWeight: '700',
              }}>
              {item.Price}
            </Text>
            <TouchableOpacity
              onPress={() => AlertForDelete(item.Id)}
              style={{flex: 0.1, alignItems: 'center'}}>
              <Image
                source={require('./img/delete.png')}
                style={{width: 30, height: 30, marginTop: 4}}
              />
            </TouchableOpacity>
          </View>
        );
      });
    } else {
      return (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 25}}>List is empty...</Text>
        </View>
      );
    }
  };
  // empty_list
  // const EmptyComponent = () => <Text>No Information...</Text>;

  //Alert for Delete
  const AlertForDelete = item => {
    Alert.alert(
      'Important..!',
      'Are you sure you want to delete data?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {text: 'OK', onPress: () => DelInfor(item)},
      ],
      {cancelable: false},
    );
  };
  //delete function
  const DelInfor = item => {
    setLoading(true);
    for (let i = 0; i < Dataformapi.length; i++) {
      if (Dataformapi[i].Id == item) {
        const Num = i;
        sendApiToDelete(Num);
        break;
      }
    }
  };
  //send delete req by Axios
  const sendApiToDelete = async item => {
    let JsonString = {Id: `${item}`};
    let url =
      'https://script.google.com/macros/s/AKfycbzig08EL0EQ3dUsGsWoe5Rqmw5FdWicvJHxyRhwWk9pyytV9xCGYHVxGFNwyJ_Rgriw/exec?action=DelProduct';
    await axios
      .post(url, JsonString)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    await APIreq();
    await setLoading(false);
  };
  //header
  // const ListHeader = ({item}) => {
  //   return (
  //     <View>
  //       <Text
  //         style={{
  //           flex: 0.5,
  //           marginEnd: 10,
  //           marginBottom: 20,
  //           fontSize: 25,
  //           color: 'white',
  //           fontWeight: '700',
  //         }}>
  //         Name
  //       </Text>
  //     </View>
  //   );
  // };

  //use api and useEffect

  const [Dataformapi, setDataformapi] = useState([]);
  const [Loading, setLoading] = useState(true);

  const APIreq = async () => {
    let url =
      'https://script.google.com/macros/s/AKfycbzig08EL0EQ3dUsGsWoe5Rqmw5FdWicvJHxyRhwWk9pyytV9xCGYHVxGFNwyJ_Rgriw/exec?action=GetProduct';
    await axios
      .post(url, '')
      .then(res => setDataformapi(res.data))
      .catch(err => console.log(err));
    await console.log('Stay Menu Page ');
    await setLoading(false);
  };

  useEffect(() => {
    APIreq();
  }, []);

  //view
  return (
    <>
      <ScrollView nestedScrollEnabled={true} style={{width: '100%'}}>
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
                padding: 15,
                backgroundColor: 'gray',
                height: 680,
                width: '93%',
                marginLeft: 12.5,
                marginTop: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ScrollView nestedScrollEnabled={true} style={{width: '100%'}}>
                <View>{CheckFlatListRenderItem()}</View>
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
      {Loading ? <Loader /> : null}
    </>
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
