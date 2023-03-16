import React, {useState, useEffect} from 'react';
import {Text, View, SafeAreaView, Pressable} from 'react-native';
import {ProgressChart} from 'react-native-chart-kit';
import {useNavigation} from '@react-navigation/native';

import * as styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const DashboardScreen = () => {
  const navigation = useNavigation();
  let initialState = {
    totalUserCount: 0,
    veryDisappointedAmount: 0,
    mildlyDisappointedAmount: 0,
    notDisappointedAmount: 0,
    progressPercentage: [0],
  };
  const [extra, setExtra] = useState(0);
  const [titleData, setTitleData] = useState('');
  const [pmfDetails, setPmfDetails] = useState(initialState);

  const clearStorages = async () => {
    AsyncStorage.clear();
    setUpdateData();
  };

  const chartConfig1 = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: opacity => `rgba(13, 13, 13,${opacity < 0.5 ? 0.1 : 1})`,
    strokeWidth: 2,
    useShadowColorFromDataset: false,
  };

  const setUpdateData = async () => {
    try {
      const value = await AsyncStorage.getItem('@AddUserData');
      if (value !== null) {
        let data = JSON.parse(value);
        setPmfDetails({
          totalUserCount: data.userCount,
          veryDisappointedAmount: data.veryDisappointed,
          mildlyDisappointedAmount: data.mildlyDisappointed,
          notDisappointedAmount: data.notDisappointed,
          progressPercentage: [
            Number((data.veryDisappointed * 100) / data.userCount) / 100 >= 1
              ? 1
              : Number((data.veryDisappointed * 100) / data.userCount) / 100,
            ,
          ],
        });

        if ((data.veryDisappointed * 100) / data.userCount >= 40) {
          setTitleData('You have a strong product/market fit');
        } else {
          setTitleData('You have not a product-market fit');
        }
        setExtra(extra + 1);
      } else {
        setPmfDetails(initialState);
        setTitleData('');
      }
    } catch (error) {
      alert('Error ==> ', error);
      console.log(error);
      // Error saving data
    }
  };

  useEffect(() => {
    navigation.addListener('focus', () => {
      setUpdateData();
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.mainContainer()}>
      <Text style={styles.headingText()}>Dashboard</Text>
      <Text
        style={styles.headingText(
          true,
        )}>{`Total User ${pmfDetails.totalUserCount}`}</Text>
      <View style={styles.rowMain()}>
        <ProgressChart
          data={pmfDetails.progressPercentage}
          width={150}
          height={150}
          strokeWidth={18}
          radius={60}
          chartConfig={chartConfig1}
          hideLegend={true}
        />
        <Text style={styles.innerTxt()}>PMF</Text>
        <Text style={[styles.innerTxt(true), {fontSize: 30}]}>
          {`${pmfDetails.progressPercentage[0] * 100}%`}
        </Text>
        <View style={{width: 100}}>
          <Text style={styles.infoText(true)}>
            {`Very disappointed ${pmfDetails.veryDisappointedAmount}`}
          </Text>
          <Text style={styles.infoText()}>
            {`Mildly disappointed ${pmfDetails.mildlyDisappointedAmount}`}
          </Text>
          <Text style={styles.infoText()}>
            {`Not disappointed ${pmfDetails.notDisappointedAmount}`}
          </Text>
        </View>
      </View>
      <View style={styles.rowMain()}>
        {titleData.length == 0 ? (
          <Pressable
            onPress={() => navigation.navigate('addDetailScreen')}
            style={styles.buttonStyle()}>
            <Text>Add Details</Text>
          </Pressable>
        ) : (
          <Pressable onPress={clearStorages} style={styles.buttonStyle(true)}>
            <Text>Clear Storage</Text>
          </Pressable>
        )}
      </View>
      <Text style={styles.titleStyle()}>{titleData}</Text>
    </SafeAreaView>
  );
};
