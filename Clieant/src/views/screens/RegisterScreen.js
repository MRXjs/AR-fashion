import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  Alert,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import Urls from '../../consts/urls';

const RegisterScreen = () => {
  const Navigation = useNavigation();

  const [data, setData] = useState();
  const [formErrors, setFormErrors] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validation = async () => {
    // check confirm password
    if (!firstName) {
      setFormErrors('First Name empty');
    } else if (!lastName) {
      setFormErrors('Last Name empty');
    } else if (!email) {
      setFormErrors('Email empty');
    } else if (!password) {
      setFormErrors('Password empty');
    } else if (!confirmPassword) {
      setFormErrors('ConfirmPassword empty');
    } else if (!password === confirmPassword) {
      setFormErrors('Password Incorrect');
    } else {
      setFormErrors();
    }
  };

  // Register function
  const registerUser = async () => {
    if (formErrors) {
      Alert.alert('Some thing Worng 🤔', `${formErrors} 😒`, [
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ]);
    } else {
      console.log(formErrors);
      const setUser = async () => {
        try {
          const response = await axios.post(Urls.register, {
            email: email,
            password: password,
            first_name: firstName,
            last_name: lastName,
          });
          Navigation.navigate('Login', {});
          return response.data;
        } catch (err) {
          Alert.alert(
            'Some thing Worng 🤔',
            "If you don't have an account, set up an account",
            [
              {
                text: 'Cancel',
                style: 'cancel',
              },
            ],
          );
        }
      };
      setData(await setUser());
    }
  };

  console.log(data);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <ImageBackground
            style={styles.defaultBg}
            source={require('../../assets/img/banner/Background.png')}
          />
          <View style={{...styles.formInput, alignItems: 'center'}}>
            <Image
              source={require('../../assets/img/logo/AR-FASHION-LOGO.png')}
              style={{width: 50, height: 50}}></Image>
          </View>
          <View style={styles.formInput}>
            <TextInput
              color={'#000000'}
              style={{color: '#000000'}}
              style={styles.textInput}
              placeholder="First Name"
              onChangeText={text => {
                setFirstName(text);
                validation();
              }}
            />
          </View>
          <View style={styles.formInput}>
            <TextInput
              color={'#000000'}
              style={{color: '#000000'}}
              style={styles.textInput}
              placeholder="Last Name"
              onChangeText={text => {
                setLastName(text);
                validation();
              }}
            />
          </View>
          <View style={styles.formInput}>
            <TextInput
              color={'#000000'}
              style={{color: '#000000'}}
              style={styles.textInput}
              placeholder="Email Address"
              onChangeText={text => {
                setEmail(text);
                validation();
              }}
            />
          </View>
          <View style={styles.formInput}>
            <TextInput
              color={'#000000'}
              style={{color: '#000000'}}
              style={styles.textInput}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={text => {
                setPassword(text);
                validation();
              }}
            />
          </View>
          <View style={styles.formInput}>
            <TextInput
              color={'#000000'}
              style={{color: '#000000'}}
              style={styles.textInput}
              placeholder="Confirm Password "
              secureTextEntry={true}
              onChangeText={text => {
                setConfirmPassword(text);
                validation();
              }}
            />
          </View>
          <View style={styles.formInput}>
            <TouchableOpacity
              style={styles.defaultBtn}
              onPress={() => {
                validation();
                registerUser();
              }}>
              <Text style={{textAlign: 'center', fontSize: 16, color: '#ffff'}}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.formInput}>
            <View
              style={{
                height: 1,
                backgroundColor: '#ddd',
                width: '100%',
              }}></View>
          </View>
          <View style={styles.formInput}>
            <TouchableOpacity
              onPress={() => {
                Navigation.navigate('Login');
              }}>
              <Text
                style={{
                  color: '#4287f5',
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                Already have an account ? Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  defaultBg: {
    width: '100%',
    height: 100,
    marginBottom: 10,
  },
  formInput: {
    marginTop: 5,
    padding: 10,
  },
  textInput: {
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#a7a7a7',
    borderRadius: 10,
  },
  defaultBtn: {
    padding: 15,
    backgroundColor: '#22ab3b',
    borderRadius: 10,
  },
});

export default RegisterScreen;
