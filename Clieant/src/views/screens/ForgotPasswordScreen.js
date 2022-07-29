import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Image,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const ForgotPasswordScreen = () => {
  const Navigation = useNavigation();

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
            <TextInput style={styles.textInput} placeholder="Email Address" />
          </View>
          <View style={styles.formInput}>
            <TouchableOpacity style={styles.defaultBtn}>
              <Text style={{textAlign: 'center', fontSize: 16, color: '#ffff'}}>
                Send Reset Link
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
    backgroundColor: '#ffffff',
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
    backgroundColor: '#22ab3b',
    borderRadius: 10,
  },
});

export default ForgotPasswordScreen;
