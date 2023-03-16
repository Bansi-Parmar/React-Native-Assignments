import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as styles from './styles';

export const AddDetailScreen = () => {
  const navigation = useNavigation();
  let initialValue = {
    userCount: '',
    veryDisappointed: '',
    mildlyDisappointed: '',
    notDisappointed: '',
  };
  const [extra, setExtra] = useState(0);
  const [pmfDetails, setPmfDetails] = useState(initialValue);
  const [pmfDetailsErr, setPmfDetailsErr] = useState(null);

  const saveData = async () => {
    if (
      pmfDetails.userCount === '' ||
      pmfDetails.veryDisappointed === '' ||
      pmfDetails.mildlyDisappointed === '' ||
      pmfDetails.notDisappointed === ''
    ) {
      setPmfDetailsErr('Please Fill All the Details!!');
      setExtra(extra + 1);
    } else {
      try {
        await AsyncStorage.setItem('@AddUserData', JSON.stringify(pmfDetails));
        navigation.navigate('dashboardScreen');
      } catch (error) {
        alert('Error ==> ', error);
        console.log(error);
      }
    }
  };
  return (
    <SafeAreaView style={styles.mainContainer()}>
      <Text style={styles.headingText()}>Add PMF Details</Text>
      {/* first Input */}
      <View style={styles.questionContainer()}>
        <Text style={styles.titleText()}>
          How many users answered the survey?
        </Text>
        <TextInput
          value={pmfDetails.userCount}
          onChangeText={text => {
            setPmfDetails({
              ...pmfDetails,
              userCount: text,
            });
          }}
          style={styles.inputText()}
          keyboardType={'number-pad'}
        />
      </View>
      {/* Second Input */}
      <View style={styles.questionContainer()}>
        <Text style={styles.titleText()}>
          How many users answered "Very disappointed" in the survey?
        </Text>
        <TextInput
          value={pmfDetails.veryDisappointed}
          onChangeText={text => {
            setPmfDetails({
              ...pmfDetails,
              veryDisappointed: text,
            });
          }}
          style={styles.inputText()}
          keyboardType={'number-pad'}
        />
      </View>
      {/* Third Input */}
      <View style={styles.questionContainer()}>
        <Text style={styles.titleText()}>
          How many users answered "Very little disappointed" in the survey?
        </Text>
        <TextInput
          value={pmfDetails.mildlyDisappointed}
          onChangeText={text => {
            setPmfDetails({
              ...pmfDetails,
              mildlyDisappointed: text,
            });
          }}
          style={styles.inputText()}
          keyboardType={'number-pad'}
        />
      </View>
      {/* Fourth Input */}
      <View style={styles.questionContainer()}>
        <Text style={styles.titleText()}>
          How many users answered "Not disappointed" in the survey?
        </Text>
        <TextInput
          value={pmfDetails.notDisappointed}
          onChangeText={text => {
            setPmfDetails({
              ...pmfDetails,
              notDisappointed: text,
            });
          }}
          style={styles.inputText()}
          keyboardType={'number-pad'}
        />
      </View>
      {pmfDetailsErr && <Text style={{color: 'red'}}>{pmfDetailsErr}</Text>}
      {/* save details */}
      <Pressable style={styles.btnContainer()} onPress={saveData}>
        <Text style={styles.titleText(true)}>Save Details</Text>
      </Pressable>
    </SafeAreaView>
  );
};
