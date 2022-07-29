import React, {useState, useEffect} from 'react';
import {View, Image, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const [isGo, setIsGo] = useState(true);
  const Navigation = useNavigation();

  useEffect(() => {
    if (isGo == true) {
      setTimeout(() => {
        Navigation.navigate('BoardScreen');
        setIsGo(false);
      }, 3000);
    }
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <LottieView
        source={require('../../../assets/img/loading/66731-loading.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default Splash;
