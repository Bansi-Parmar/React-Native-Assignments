import React from 'react';
import {Text, View, SafeAreaView, Pressable} from 'react-native';
import {ProgressChart} from 'react-native-chart-kit';
import {useNavigation} from '@react-navigation/native';

import {useSelector, useDispatch} from 'react-redux';
import {userLogOut} from 'redux-actions';

import * as styles from './styles';

export const DashboardScreen = () => {
  let {getUserDetails} = useSelector(state => ({
    getUserDetails: state.addUserDetails.getUserDetails,
  }));
  let percentage = [
    Number(
      (getUserDetails?.veryDisappointed * 100) / getUserDetails?.userCount,
    ) /
      100 >=
    1
      ? 1
      : Number(
          (getUserDetails?.veryDisappointed * 100) / getUserDetails?.userCount,
        ) / 100,
  ];
  // console.log('DASH-SCREEN ==> ', getUserDetails);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const clearStorages = async () => {
    await dispatch(userLogOut());
  };
  const chartConfig1 = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: opacity => `rgba(13, 13, 13,${opacity < 0.5 ? 0.1 : 1})`,
    strokeWidth: 2,
    useShadowColorFromDataset: false,
  };

  return (
    <SafeAreaView style={styles.mainContainer()}>
      <Text style={styles.headingText()}>Dashboard</Text>
      <Text style={styles.headingText(true)}>{`Total User ${
        getUserDetails.userCount !== undefined ? getUserDetails.userCount : 0
      }`}</Text>
      <View style={styles.rowMain()}>
        <ProgressChart
          data={isNaN(percentage.toString()) ? [0] : percentage}
          width={150}
          height={150}
          strokeWidth={18}
          radius={60}
          chartConfig={chartConfig1}
          hideLegend={true}
        />
        <Text style={styles.innerTxt()}>PMF</Text>
        <Text style={[styles.innerTxt(true), {fontSize: 30}]}>
          {`${parseInt(
            isNaN(percentage.toString()) ? [0] : percentage * 100,
            10,
          )}%`}
        </Text>
        <View style={{width: 100}}>
          <Text style={styles.infoText(true)}>
            {`Very disappointed ${
              getUserDetails.veryDisappointed !== undefined
                ? getUserDetails.veryDisappointed
                : 0
            }`}
          </Text>
          <Text style={styles.infoText()}>
            {`Mildly disappointed ${
              getUserDetails?.mildlyDisappointed !== undefined
                ? getUserDetails?.mildlyDisappointed
                : 0
            }`}
          </Text>
          <Text style={styles.infoText()}>
            {`Not disappointed ${
              getUserDetails?.notDisappointed !== undefined
                ? getUserDetails?.notDisappointed
                : 0
            }`}
          </Text>
        </View>
      </View>
      <View style={styles.rowMain()}>
        {getUserDetails.notDisappointed == undefined ? (
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
      {!isNaN(percentage.toString()) && (
        <Text style={styles.titleStyle()}>
          {percentage >= 40
            ? 'You have a strong product/market fit'
            : 'You have not a product-market fit'}
        </Text>
      )}
    </SafeAreaView>
  );
};
