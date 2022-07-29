import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  Alert,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigator from '../navigation/BottomNavigator';

const VirtualRoom = () => {
  const [backgroundImgLink, setBackgroundImgLink] = useState(
    require('../../assets/img/background/Room.jpg'),
  );
  const [avatarLink, setAvatarLink] = useState(
    require('../../assets/img/outfit/Outfit_01.gif'),
  );
  const [displayBackground, setDisplayBackground] = useState('none');
  const [displayItems, setDisplayItems] = useState('flex');

  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      <ScrollView>
        <View style={styles.upBtnContainer}>
          <TouchableOpacity
            onPress={() => {
              setDisplayItems('flex'), setDisplayBackground('none');
            }}>
            <View style={styles.upbtn}>
              <Text style={{fontWeight: 'bold', color: '#f2e7fe'}}>Items</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setDisplayItems('none'), setDisplayBackground('flex');
            }}>
            <View style={styles.upbtn}>
              <Text style={{fontWeight: 'bold', color: '#f2e7fe'}}>Scene</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Alert.alert(
                'Some thing Worng 🤔',
                'Stay tuned for the next version 😉',
                [
                  {
                    text: 'Cancel',
                    style: 'cancel',
                  },
                ],
              );
            }}>
            <Image
              source={require('../../assets/img/icons/Scan.png')}
              style={{height: 50, width: 50}}
            />
          </TouchableOpacity>
        </View>
        <ImageBackground
          source={backgroundImgLink}
          style={{
            width: '100%',
            height: '100%',
            marginTop: 10,
            display: 'flex',
          }}>
          <View
            style={{
              ...styles.backgroundImgContainer,
              display: displayBackground,
            }}>
            <TouchableOpacity
              style={styles.backgroundImg}
              onPress={() => {
                setBackgroundImgLink(
                  require('../../assets/img/background/Room.jpg'),
                );
              }}>
              <Image
                source={require('../../assets/img/background/Room.jpg')}
                style={{height: 200, width: 100, borderRadius: 20}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.backgroundImg}
              onPress={() => {
                setBackgroundImgLink(
                  require('../../assets/img/background/Beach.jpg'),
                );
              }}>
              <Image
                source={require('../../assets/img/background/Beach.jpg')}
                style={{height: 200, width: 100}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.backgroundImg}
              onPress={() => {
                setBackgroundImgLink(
                  require('../../assets/img/background/Outside.jpg'),
                );
              }}>
              <Image
                source={require('../../assets/img/background/Outside.jpg')}
                style={{height: 200, width: 100}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.backgroundImg}
              onPress={() => {
                setBackgroundImgLink(
                  require('../../assets/img/background/Street.jpg'),
                );
              }}>
              <Image
                source={require('../../assets/img/background/Street.jpg')}
                style={{height: 200, width: 100}}
              />
            </TouchableOpacity>
          </View>
          <View style={{...styles.viewContainer}}>
            <View style={{...styles.avatar, display: displayItems}}>
              <TouchableOpacity>
                <Image source={avatarLink} />
              </TouchableOpacity>
            </View>
            <View style={{...styles.clothContainer, display: displayItems}}>
              <TouchableOpacity
                style={styles.cloth}
                onPress={() => {
                  setAvatarLink(
                    require('../../assets/img/outfit/Outfit_01.gif'),
                  );
                }}>
                <Image
                  source={require('../../assets/img/outfit/Outfit_01_Logo.gif')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cloth}
                onPress={() => {
                  setAvatarLink(
                    require('../../assets/img/outfit/Outfit_02.gif'),
                  );
                }}>
                <Image
                  source={require('../../assets/img/outfit/Outfit_02_Logo.gif')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cloth}
                onPress={() => {
                  setAvatarLink(
                    require('../../assets/img/outfit/Outfit_03.gif'),
                  );
                }}>
                <Image
                  source={require('../../assets/img/outfit/Outfit_03_Logo.gif')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  upBtnContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  upbtn: {
    backgroundColor: '#23036a',
    width: 120,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  backgroundImgContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  backgroundImg: {
    borderWidth: 4,
    borderRadius: 10,
  },
  viewContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  avatar: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clothContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  cloth: {},
});

export default VirtualRoom;
