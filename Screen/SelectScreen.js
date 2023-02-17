import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Loader from './Loader';
import axios from 'axios';
import {SelectList} from 'react-native-dropdown-select-list';

const Home = ({navigation}) => {
  //+++++++++++++++++++++++ push page +++++++++++++++++++++++++++
  const GotoHome = () => {
    navigation.push('HomePage');
  };
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //+++++++++++++++++++++++state-zone++++++++++++++++++++++++++++
  const [GetApi, setGetApi] = useState([]);
  const [QTYprice, setQTYprice] = useState(1);
  const [Loading, setLoading] = useState(true);
  const [DD, setDD] = useState([
    {key: '1', value: 'assdqqd'},
    {key: '2', value: 'asgfhgfs'},
    {key: '3', value: 'asafd'},
  ]);
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //++++++++++++++++++++++++ UseEffect ++++++++++++++++++++++++++
  useEffect(() => {
    GetMenuFromList();
  }, []);
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //++++++++++++++++++++++++ function mapList +++++++++++++++++++
  const RenderItem = () => {
    if (ShowList.length > 0) {
      return ShowList.map((item, i) => {
        return (
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#202020',
              borderColor: 'black',
              borderRadius: 10,
              borderWidth: 0.7,
              justifyContent: 'space-around',
              alignItems: 'center',
              marginBottom: 10,
              padding: 15,
            }}
            key={i}>
            <Text
              style={{
                fontSize: 25,
                color: 'white',
                fontWeight: '700',
              }}>
              {i + 1}.{item.Name}
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: 'yellow',
                fontWeight: '700',
              }}>
              {item.Quantity}
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: 'lime',
                fontWeight: '700',
              }}>
              {item.Price} ฿
            </Text>
          </View>
        );
      });
    } else {
      return (
        <View
          style={{
            alignItems: 'center',
            height: 600,
            backgroundColor: '#202020',
            borderRadius: 15,
          }}>
          <Text style={{fontSize: 25, color: 'white', marginTop: 20}}>
            List is empty...
          </Text>
        </View>
      );
    }
  };
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //++++++++++++++++++++++++++ Loop +++++++++++++++++++++++++++++
  const Loop = () => {
    let AList = [];
    if (GetApi.length > 0) {
      for (let i = 0; i < GetApi.length; i++) {
        AList[i] = {key: `${GetApi[i].Name}`, value: `${GetApi[i].Name}`};
      }
    }
    return AList;
  };
  //++++++++++++++++++++++++++ Get API ++++++++++++++++++++++++++
  const GetMenuFromList = async () => {
    let url =
      'https://script.google.com/macros/s/AKfycbzig08EL0EQ3dUsGsWoe5Rqmw5FdWicvJHxyRhwWk9pyytV9xCGYHVxGFNwyJ_Rgriw/exec?action=GetProduct';
    await axios
      .post(url, '')
      .then(res => setGetApi(res.data))
      .catch(err => console.log(err));
    await setLoading(false);
  };
  //++++++++++++++++++ Post Function ++++++++++++++++++++++++++++
  const loadpost = async () => {
    await setLoading(true);
    await PostFunction(ShowList);
  };
  const PostFunction = async item => {
    let url =
      'https://script.google.com/macros/s/AKfycbzig08EL0EQ3dUsGsWoe5Rqmw5FdWicvJHxyRhwWk9pyytV9xCGYHVxGFNwyJ_Rgriw/exec?action=AddListToDay';
    const data = item;
    await axios
      .post(url, JSON.stringify(data))
      .then(res => console.log(res.data))
      .then(setLoading(false))
      .then(
        setTimeout(() => {
          GotoHome();
        }, 1500),
      )
      .catch(err => console.log(err));
  };
  //+++++++++++++++++ POST to List day to Day++++++++++++++++++++
  const PostApiToListDaytoDay = async () => {
    if (ShowList.length > 0) {
      Alert.alert(
        'Important..!',
        'Are you sure you want to save data?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {text: 'OK', onPress: () => loadpost()},
        ],
        {cancelable: false},
      );
    } else {
      Alert.alert('Error', 'Can not send data Or List is Empty!!');
    }
  };
  //++++++++++++++++++++ dropdown +++++++++++++++++++++++++++++++

  const DropDown = () => {
    return (
      <View
        style={{
          marginTop: 20,
          width: '90%',
          alignItems: 'center',
          backgroundColor: 'gray',
          padding: 15,
          borderRadius: 10,
          marginBottom: 20,
        }}>
        <SelectList
          data={Loop()}
          setSelected={setValueDropDown}
          search={false}
          boxStyles={{backgroundColor: 'white', width: 300, height: 50}}
          dropdownStyles={{backgroundColor: 'white', height: '100%'}}
          inputStyles={{fontSize: 20, fontWeight: '800'}}
          dropdownTextStyles={{fontSize: 15, fontWeight: '500'}}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '80%',
            marginTop: 10,
          }}>
          <TextInput
            defaultValue={'1'}
            value={QTYprice}
            onChangeText={text => setQTYprice(parseInt(text))}
            keyboardType="numeric"
            style={{
              height: 42,
              width: 80,
              backgroundColor: 'white',
              borderRadius: 10,
              fontSize: 18,
              textAlign: 'center',
            }}
          />
          <TouchableOpacity
            onPress={() => ControlFunction()}
            style={{
              height: 42,
              width: 80,
              backgroundColor: 'white',
              borderRadius: 10,
              fontSize: 18,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'cyan',
            }}>
            <Text style={{fontSize: 18, fontWeight: '700'}}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => resetList()}
            style={{
              height: 42,
              width: 80,
              backgroundColor: 'white',
              borderRadius: 10,
              fontSize: 18,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'red',
            }}>
            <Text style={{fontSize: 18, fontWeight: '700', color: 'white'}}>
              Reset
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  //++++++++++++++++++++++ sum price ++++++++++++++++++++++++++++
  const SumPrice = () => {
    if (QTYprice == 0) {
      return 1;
    } else {
      let Sumprice;
      let total;
      for (let i = 0; i < GetApi.length; i++) {
        if (GetApi[i].Name == ValueDropDown) {
          Sumprice = GetApi[i].Price;
        }
      }
      total = Sumprice * QTYprice;
      return total;
    }
  };
  //++++++++++++++++++++++ resetList ++++++++++++++++++++++
  const resetList = () => {
    setShowList([]);
  };
  //++++++++++++++++++++ SumQuantity&SumPrice +++++++++++++++++++++
  // const [TotalQTY, setTotalQTY] = useState(0);
  // const [SumTotal, setSumTotal] = useState(0);
  // const SetStatus = () => {
  //   let Quana1 = 0;
  //   let pri1 = 0;
  //   Quana1 = ShowList.reduce((sum, item) => sum + parseInt(item.Quantity), 0);
  //   pri1 = ShowList.reduce((sum, item) => sum + parseInt(item.Price), 0);
  //   setTotalQTY(Quana1);
  //   setSumTotal(pri1);
  // };
  //++++++++++++++++++++++ Control function +++++++++++++++++++++
  const ControlFunction = async () => {
    await SaveToList();
  };
  //++++++++++++++++++++++ save to LIst +++++++++++++++++++++++++
  const [ValueDropDown, setValueDropDown] = useState('');
  const [ShowList, setShowList] = useState([]);
  const SaveToList = () => {
    if (QTYprice <= 0 || ValueDropDown == '' || QTYprice == '') {
      Alert.alert('error', 'No Information');
    } else {
      if (GetApi.length > 0) {
        setShowList([
          ...ShowList,
          {
            Name: `${ValueDropDown}`,
            Quantity: `${QTYprice}`,
            Price: `${SumPrice()}`,
          },
        ]);
      } else {
        console.log("Error don't process");
      }
    }
  };
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  return (
    <SafeAreaView>
      <ScrollView>
        <LinearGradient
          colors={['#495A5C', '#31363A', '#000000']}
          style={styles.linearGradient}>
          {DropDown()}
          <View style={{height: 550, width: '90%'}}>
            <ScrollView nestedScrollEnabled={true} style={{width: '100%'}}>
              <View>{RenderItem()}</View>
            </ScrollView>
          </View>
          <View style={{flexDirection: 'row', height: 110, marginTop: 40}}>
            <TouchableOpacity
              onPress={GotoHome}
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
              onPress={() => PostApiToListDaytoDay()}
              style={{
                backgroundColor: 'red',
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
                Confirm
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ScrollView>
      {Loading ? <Loader /> : null}
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
