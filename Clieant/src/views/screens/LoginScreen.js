import React, {useState} from 'react';
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
import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';
import Urls from '../../consts/urls';

const LoginScreen = () => {
  const Navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState();

  const logIn = async () => {
    // get user
    const getUser = async () => {
      try {
        const response = await axios.post(Urls.logInUrl, {
          email,
          password,
        });

        // --------------------------------------------------------------------------------
        const fixDily = async () => {
          setData(response.data);
        };
        await fixDily();
        // --------------------------------------------------------------------------------

        // check user
        if (data.valid_user === true) {
          Navigation.navigate('AvatarScreen', {
            // userId: 12,
            // firstName: 'suresh',
            // favouriteList: 'games',
            // cartList: 'warface',
          });
        } else {
          Alert.alert(
            'Some thing Worng 🤔',
            "Email or Password Incorrect 😢 If you don't have an account, set up an account",
            [
              {
                text: 'Cancel',
                style: 'cancel',
              },
            ],
          );
        }
      } catch (err) {
        console.log(err);
      }
    };
    await getUser();
  };

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
              placeholder="Your Email Address"
              keyboardType="email-address"
              onChangeText={text => {
                setEmail(text);
              }}
            />
          </View>
          <View style={styles.formInput}>
            <TextInput
              color={'#000000'}
              style={{color: '#000000'}}
              style={styles.textInput}
              placeholder="Your Password"
              secureTextEntry={true}
              onChangeText={text => {
                setPassword(text);
              }}
            />
          </View>
          <View style={styles.formInput}>
            <TouchableOpacity
              onPress={() => {
                Navigation.navigate('FrogetPassword');
              }}>
              <Text
                style={{
                  color: '#f53333',
                  textAlign: 'right',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                Froget Pasword ?
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.formInput}>
            <TouchableOpacity style={styles.defaultBtn} onPress={logIn}>
              <Text style={{textAlign: 'center', fontSize: 16, color: '#ffff'}}>
                LogIn
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.formInput}>
            <Text style={{textAlign: 'center'}}>Or</Text>
          </View>
          <View style={styles.formInput}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <TouchableOpacity style={{marginRight: 10}}>
                <Image
                  source={require('../../assets/img/icons/google.png')}
                  style={{width: 40, height: 40}}></Image>
              </TouchableOpacity>
              <TouchableOpacity style={{marginLeft: 10}}>
                <Image
                  source={require('../../assets/img/icons/facebook.png')}
                  style={{width: 51, height: 51}}></Image>
              </TouchableOpacity>
            </View>
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
                Navigation.navigate('Register');
              }}>
              <Text
                style={{
                  color: '#22ab3b',
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                Need Account ? Register Now
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
    marginTop: 10,
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
    backgroundColor: '#4287f5',
    borderRadius: 10,
  },
});

export default LoginScreen;
