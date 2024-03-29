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
import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Loader from './Loader';
import axios from 'axios';

const Home = ({navigation}) => {
  //+++++++++++++++++++++++ push page +++++++++++++++++++++++++++
  const GotoMenuBottom = () => {
    navigation.push('MenuButton');
  };
  const GotoSelectProduct = () => {
    navigation.push('SelectScreen');
  };
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //+++++++++++++++++++++++state-zone++++++++++++++++++++++++++++
  const [GetApi, setGetApi] = useState([]);
  const [Loading, setLoading] = useState(true);
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //++++++++++++++++++++++++ UseEffect ++++++++++++++++++++++++++
  useEffect(() => {
    DaytoDay();
  }, []);

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //++++++++++++++++++++++++ formatDate +++++++++++++++++++++++++
  const FormatDateDay = item => {
    let date = new Date(`${item}`);
    let options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };
    let formattedDate = date.toLocaleDateString('th-TH', options);
    return formattedDate;
  };
  const FormatDateTime = item => {
    let date = new Date(`${item}`);
    let formattedTime = date.toLocaleTimeString('th-TH', {
      hour: 'numeric',
      minute: 'numeric',
    });
    return formattedTime;
  };
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //++++++++++++++++++++++++ function mapList +++++++++++++++++++
  const RenderItem = item => {
    if (GetApi.length > 0) {
      let Revers = [];
      Revers = GetApi.slice().reverse();
      return Revers.map((item, i) => {
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
            <View style={{flex: 0.6, marginLeft: 10}}>
              <Text
                style={{
                  fontSize: 22,
                  color: 'white',
                  fontWeight: '700',
                }}>
                {i + 1}. {item.Name}
              </Text>
              <View style={{flexDirection:'row'}}>
                <Text
                  style={{
                    fontSize: 18,
                    color: 'yellow',
                    fontWeight: '700',
                    marginRight:10
                  }}>
                  {item.Quantity} ea
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
            </View>
            <Text
              style={{
                flex: 0.5,
                fontSize: 20,
                color: 'white',
                fontWeight: '700',
                marginLeft: 15,
              }}>
              {FormatDateDay(item.date)}
              <Text style={{color: 'cyan'}}> Time : </Text>
              <Text style={{color: 'lime'}}>{FormatDateTime(item.date)}</Text>
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
  //+++++++++++++++++++++++++++ Click Save ++++++++++++++++++++++
  const ClickSave = () => {
    Alert.alert(
      'Important..!',
      'Are you sure you want to save data?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {text: 'OK', onPress: () => PostFunction() },
      ],
      {cancelable: false},
    )
  }
  //+++++++++++++++++++++++++++ Post Date ++++++++++++++++++++++++
  const PostDate = async () => {
    let url =
    'https://script.google.com/macros/s/AKfycbzig08EL0EQ3dUsGsWoe5Rqmw5FdWicvJHxyRhwWk9pyytV9xCGYHVxGFNwyJ_Rgriw/exec?action=AddListDate';
    const data = {Total: `${SumTotal}`};
    await axios 
    .post(url, JSON.stringify(data))
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
  }
  //+++++++++++++++++++++++++++ Post Total +++++++++++++++++++++++
  const PostFunction = async () => {
    let data = GetApi.slice().reverse();
    if (data.length == 0) {
      Alert.alert('Error', 'No information');
    } else {
      let url =
    'https://script.google.com/macros/s/AKfycbzig08EL0EQ3dUsGsWoe5Rqmw5FdWicvJHxyRhwWk9pyytV9xCGYHVxGFNwyJ_Rgriw/exec?action=AddListToTal';
      const data = GetApi.slice().reverse();
      await setLoading(true);
      await PostDate();
      await axios
        .post(url, JSON.stringify(data))
        .then(res => console.log(res.data))
        .then(setLoading(false))
        .then(
          setTimeout(() => {
            GotoMenuBottom();
          }, 1500),
        )
        .catch(err => console.log(err));
      
    }
  };
  //++++++++++++++++++++++++++ Get API ++++++++++++++++++++++++++
  const DaytoDay = async () => {
    let url =
      'https://script.google.com/macros/s/AKfycbzig08EL0EQ3dUsGsWoe5Rqmw5FdWicvJHxyRhwWk9pyytV9xCGYHVxGFNwyJ_Rgriw/exec?action=GetListToDay';
    await axios
      .post(url, '')
      .then(res => setGetApi(res.data))
      .catch(err => console.log(err));
    await console.log('Stay DaytoDayPage');
    await setLoading(false);
  };

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //++++++++++++++++++++ SumQuantity&SumPrice +++++++++++++++++++++
  const TotalQTY = GetApi.reduce((sum, item) => sum + item.Quantity, 0);
  const SumTotal = GetApi.reduce((sum, item) => sum + item.Price, 0);
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  return (
    <SafeAreaView>
      <ScrollView>
        <LinearGradient
          colors={['#495A5C', '#31363A', '#000000']}
          style={styles.linearGradient}>
          <View style={{height: 200, alignItems: 'center'}}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  borderWidth: 2,
                  height: 70,
                  width: 160,
                  marginTop: 30,
                  marginRight: 10,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor: '#10c16b',
                  backgroundColor: '#353535',
                }}>
                <Text style={{fontSize: 20, color: 'white', fontWeight: '900'}}>
                  Quantity :<Text style={{color: 'yellow'}}> {TotalQTY}</Text>
                </Text>
              </View>
              <View
                style={{
                  borderWidth: 2,
                  height: 70,
                  width: 160,
                  marginTop: 30,
                  marginLeft: 10,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor: '#10c16b',
                  backgroundColor: '#353535',
                }}>
                <Text style={{fontSize: 20, color: 'white', fontWeight: '900'}}>
                  Total :<Text style={{color: 'lime'}}> {SumTotal}</Text>
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={GotoSelectProduct}
              style={{
                backgroundColor: '#10c16b',
                height: 45,
                width: 335,
                marginTop: 20,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 22, fontWeight: '900'}}>
                Select Product
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{height: 500, width: '90%'}}>
            <ScrollView nestedScrollEnabled={true} style={{width: '100%'}}>
              <View>{RenderItem()}</View>
            </ScrollView>
          </View>
          <View style={{flexDirection: 'row', height: 110, marginTop: 40}}>
            <TouchableOpacity
              onPress={GotoMenuBottom}
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
              onPress={ClickSave}
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
                Close-Shop
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
