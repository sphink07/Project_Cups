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
import {SelectList} from 'react-native-dropdown-select-list';
import {SafeAreaView} from 'react-native-safe-area-context';
import Loader from './Loader';
import axios from 'axios';

const TotalSum = ({navigation}) => {
  const GotoMenuButton = () => {
    navigation.push('MenuButton');
  };
  // use effect
  useEffect(() => {
    GetListDate();
  }, []);
  // Getdate from api
  const [GetApiDate, setGetApiDate] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [Listdate, setListdate] = useState([]);
  // Get Api
  const GetListDate = async () => {
    let url =
      'https://script.google.com/macros/s/AKfycbzig08EL0EQ3dUsGsWoe5Rqmw5FdWicvJHxyRhwWk9pyytV9xCGYHVxGFNwyJ_Rgriw/exec?action=GetListDate';
    await axios
      .post(url, '')
      .then(res => setGetApiDate(res.data))
      .catch(err => console.log(err));
    await axios
      .post(url, '')
      .then(res => setListdate(res.data))
      .catch(err => console.log(err));
    await setLoading(false);
  };
  // format date to year
  const FormatDateYear = item => {
    let date = new Date(item);
    let year = new Intl.DateTimeFormat('en', {year: 'numeric'}).format(date);
    return year;
  };
  // format date to ShowList
  const FormatDateToShowList = item => {
    let date = new Date(`${item}`);
    let options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };
    let formattedDate = date.toLocaleDateString('th-TH', options);
    return formattedDate;
  };
  // Loop
  const Loop = () => {
    let AList = [];
    if (GetApiDate.length > 0) {
      for (let i = 0; i < GetApiDate.length; i++) {
        AList[i] = FormatDateYear(GetApiDate[i].Date);
        // key: `${}`,
        // value: `${FormatDate(GetApiDate[i].Date)}`,
      }
    }
    let formatDate = Array.from(new Set(AList));
    return formatDate;
  };
  // data of dropdownlist
  const [Month, setMonth] = useState([
    {value: 'January', key: 1},
    {value: 'February', key: 2},
    {value: 'March', key: 3},
    {value: 'April', key: 4},
    {value: 'May', key: 5},
    {value: 'June', key: 6},
    {value: 'July', key: 7},
    {value: 'August', key: 8},
    {value: 'September', key: 9},
    {value: 'October', key: 10},
    {value: 'November', key: 11},
    {value: 'December', key: 12},
  ]);
  const [DateMonth, setDateMonth] = useState('');
  const [DateYear, setDateYear] = useState('');
  // render item
  const RenderItem = () => {
    if (Listdate.length > 0) {
      return Listdate.slice()
        .reverse()
        .map((item, i) => {
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
                  flex: 0.8,
                  fontSize: 25,
                  color: 'white',
                  fontWeight: '700',
                }}>
                {FormatDateToShowList(item.Date)}
              </Text>
              <Text
                style={{
                  flex: 0.2,
                  fontSize: 18,
                  color: 'yellow',
                  fontWeight: '700',
                }}>
                {item.Total}
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
  // Sum total
  const [TotalList, setTotalList] = useState(0);
  const SumTotal = async (item) => {
    let Num = 0;
     for (let i = 0; i < item.length; i++) {
        Num = item[i].Total + Num;
     }
    
    await setTotalList(Num);
  };
  // Get Month
  const GetMonth = item => {
    let Num = 0;
    let date = new Date(`${item}`);
    Num = date.getMonth() + 1;
    return Num;
  };
  // Get Year
  const GetYear = item => {
    let Num = '';
    let date = new Date(`${item}`);
    Num = date.getFullYear();
    return Num;
  };
  // Check Year from list
  const CheckYear = async () => {
      let ListSelect = []
      let filteredArray = []
    if (DateMonth == '' || DateYear == '') {
      Alert.alert('Error', 'Information not enough');
    } else {
      await setListdate([]);
      for (let i = 0; i < GetApiDate.length; i++) {
        if (
          GetMonth(GetApiDate[i].Date) == DateMonth &&
          GetYear(GetApiDate[i].Date) == DateYear
        ) {
          ListSelect[i] = {Date: `${GetApiDate[i].Date}`, Total:GetApiDate[i].Total}
        }
      }
      filteredArray = ListSelect.filter(item => item !== undefined);
      await setListdate(filteredArray);
      await SumTotal(filteredArray)
    }
  };

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
                save="key"
                placeholder="Please select month"
                data={Month}
                setSelected={setDateMonth}
                search={false}
                boxStyles={{backgroundColor: 'white', width: 300, height: 50}}
                dropdownStyles={{backgroundColor: 'white', height: '100%'}}
                inputStyles={{fontSize: 20, fontWeight: '800'}}
                dropdownTextStyles={{fontSize: 15, fontWeight: '500'}}
              />
              <SelectList
                placeholder="Please select year"
                data={Loop()}
                setSelected={setDateYear}
                search={false}
                boxStyles={{
                  backgroundColor: 'white',
                  width: 300,
                  height: 50,
                  marginTop: 10,
                }}
                dropdownStyles={{backgroundColor: 'white', height: 90}}
                inputStyles={{fontSize: 20, fontWeight: '800'}}
                dropdownTextStyles={{fontSize: 15, fontWeight: '500'}}
              />
              <View
                style={{
                  backgroundColor: '#303030',
                  alignItems: 'center',
                  borderColor: 'black',
                  borderWidth: 1,
                  justifyContent: 'center',
                  borderRadius: 15,
                  marginTop: 10,
                  width: 298,
                }}>
                <Text
                  style={{
                    padding: 5,
                    fontSize: 25,
                    fontWeight: '500',
                    color: 'white',
                  }}>
                  Total :<Text style={{color: 'lime'}}> {TotalList}</Text>
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#909090',
                height: 500,
                width: 350,
                borderRadius: 10,
                padding: 10,
              }}>
              <ScrollView nestedScrollEnabled={true} style={{width: '100%'}}>
                {RenderItem()}
              </ScrollView>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 15,
                width: 300,
              }}>
              <TouchableOpacity
                onPress={GotoMenuButton}
                style={{
                  backgroundColor: '#909090',
                  height: 50,
                  width: 130,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 20, fontWeight: '600', color: 'white'}}>
                  Back
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={CheckYear}
                style={{
                  backgroundColor: '#10c16b',
                  height: 50,
                  width: 130,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 20, fontWeight: '600', color: 'white'}}>
                  Calculate
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
      {Loading ? <Loader /> : null}
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
