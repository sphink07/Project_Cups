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
  const GetListDate = async () => {
    let url =
      'https://script.google.com/macros/s/AKfycbzig08EL0EQ3dUsGsWoe5Rqmw5FdWicvJHxyRhwWk9pyytV9xCGYHVxGFNwyJ_Rgriw/exec?action=GetListDate';
    await axios
      .post(url, '')
      .then(res => setGetApiDate(res.data))
      .catch(err => console.log(err));
    await setLoading(false);
  };
  // format date to year
  const FormatDate = item => {
    let date = new Date(item);
    let year = new Intl.DateTimeFormat('en', {year: 'numeric'}).format(date);
    return year;
  };
  // Loop
  const Loop = () => {
    let AList = [];
    if (GetApiDate.length > 0) {
      for (let i = 0; i < GetApiDate.length; i++) {
        AList[i] = FormatDate(GetApiDate[i].Date) ;
        // key: `${}`,
        // value: `${FormatDate(GetApiDate[i].Date)}`,
      }
    }
    let formatDate = Array.from(new Set(AList))
    return formatDate;
  };
  // data of dropdownlist
  const [Month, setMonth] = useState([
    {value: 'January'},
    {value: 'February'},
    {value: 'March'},
    {value: 'April'},
    {value: 'May'},
    {value: 'June'},
    {value: 'July'},
    {value: 'August'},
    {value: 'September'},
    {value: 'October'},
    {value: 'November'},
    {value: 'December'},
  ]);
  const [DateMonth, setDateMonth] = useState('');
  const [DateYear, setDateYear] = useState('');
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
                dropdownStyles={{backgroundColor: 'white', height:80}}
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
                  Total :<Text style={{color: 'lime'}}>10000</Text>
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#909090',
                height: 500,
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
