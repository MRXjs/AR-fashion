import React, {useState} from 'react';
import {StyleSheet, Text, SafeAreaView, View, Image} from 'react-native';
import COLORS from '../../consts/colors';
import {PrimaryButton} from '../components/Button';

const OnBoardScreen = ({navigation}) => {
  const [imageLink, setImageLink] = useState(
    require('../../assets/img/logo/AR-FASHION-LOGO.png'),
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={{height: 400, alignItems: 'center'}}>
        <Image
          style={{
            width: 300,
            resizeMode: 'contain',
            top: -120,
          }}
          source={imageLink}
        />
      </View>
      <View style={style.textContainer}>
        <View>
          <Text
            style={{
              fontSize: 32,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            AR FASHION
          </Text>
          <Text
            style={{
              marginTop: 20,
              fontSize: 18,
              textAlign: 'center',
            }}>
            Shop with the 3D Avatar, ARF will change the way you buy the
            clothes.
          </Text>
        </View>
        <View style={style.indicatorContainer}>
          <View style={style.currentIndicator}></View>
          <View style={style.indicator}></View>
          <View style={style.indicator}></View>
        </View>
        <PrimaryButton
          onPress={() => navigation.navigate('Login')}
          title={'Get Started'}
        />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  textContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  indicatorContainer: {
    marginTop: 10,
    height: 50,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  currentIndicator: {
    height: 12,
    width: 30,
    borderRadius: 10,
    backgroundColor: '#BB86FC',
    marginHorizontal: 5,
  },
  indicator: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#908e8c',
    marginHorizontal: 5,
  },
});

export default OnBoardScreen;
