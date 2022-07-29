import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Slider from '@react-native-community/slider';
import {PrimaryButton} from '../components/Button';
import {useNavigation, useRoute} from '@react-navigation/native';
import gender from '../../consts/gender';

const AvatarScreen = () => {
  const Navigation = useNavigation();

  const [heightRange, setHeightRange] = useState('50%');
  const [weightRange, setWeightRange] = useState('50%');
  const [waistRange, setWaistRange] = useState('50%');
  const [ageRange, setAgeRange] = useState('26');
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  let imageLink = require('../../assets/img/Avatar/Female/50-60.gif');

  if (parseInt(weightRange) < 20) {
    imageLink = require('../../assets/img/Avatar/Female/10-20.gif');
  } else if (parseInt(weightRange) <= 30) {
    imageLink = require('../../assets/img/Avatar/Female/20-30.gif');
  } else if (parseInt(weightRange) <= 40) {
    imageLink = require('../../assets/img/Avatar/Female/30-40.gif');
  } else if (parseInt(weightRange) <= 50) {
    imageLink = require('../../assets/img/Avatar/Female/40-50.gif');
  } else if (parseInt(weightRange) <= 60) {
    imageLink = require('../../assets/img/Avatar/Female/50-60.gif');
  } else if (parseInt(weightRange) <= 70) {
    imageLink = require('../../assets/img/Avatar/Female/60-70.gif');
  } else if (parseInt(weightRange) <= 80) {
    imageLink = require('../../assets/img/Avatar/Female/70-80.gif');
  } else if (parseInt(weightRange) <= 90) {
    imageLink = require('../../assets/img/Avatar/Female/80-90.gif');
  } else if (parseInt(weightRange) <= 100) {
    imageLink = require('../../assets/img/Avatar/Female/90-100.gif');
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.avatarContainer}>
          <Image source={imageLink} style={styles.avatarImage} />
        </View>
        <View style={styles.sliderContainer}>
          <View style={styles.slider}>
            <Text style={styles.sliderLable}>Height: {heightRange}</Text>
            <Slider
              style={{width: 250, height: 40}}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#6200EE"
              maximumTrackTintColor="#6200EE"
              thumbTintColor="#23036a"
              value={0.5}
              onValueChange={value => {
                setHeightRange(parseInt(value * 100) + '%');
              }}
            />
          </View>

          <View style={styles.slider}>
            <Text style={styles.sliderLable}>Weight: {weightRange}</Text>
            <Slider
              style={{width: 250, height: 40}}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#6200EE"
              maximumTrackTintColor="#6200EE"
              thumbTintColor="#23036a"
              value={0.5}
              onValueChange={value => {
                setWeightRange(parseInt(value * 100) + '%');
              }}
            />
          </View>

          <View style={styles.slider}>
            <Text style={styles.sliderLable}>Waist: {waistRange}</Text>
            <Slider
              style={{width: 250, height: 40}}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#6200EE"
              maximumTrackTintColor="#6200EE"
              thumbTintColor="#23036a"
              value={0.5}
              onValueChange={value => {
                setWaistRange(parseInt(value * 100) + '%');
              }}
            />
          </View>

          <View style={styles.slider}>
            <Text style={styles.sliderLable}>Age: {ageRange}</Text>
            <Slider
              style={{width: 250, height: 40}}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#6200EE"
              maximumTrackTintColor="#6200EE"
              thumbTintColor="#23036a"
              value={0.3}
              onValueChange={value => {
                setAgeRange(parseInt(value * 100));
              }}
            />
          </View>
        </View>
        <View style={styles.genderIconContainer}>
          {gender.map((category, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              onPress={() => setSelectedCategoryIndex(index)}>
              <View
                style={{
                  backgroundColor:
                    selectedCategoryIndex == index ? '#6200EE' : '#f2e7fe',
                  ...styles.categoryBtn,
                }}>
                <View style={styles.categoryBtnImgCon}>
                  <Image
                    source={category.image}
                    style={{height: 35, width: 35, resizeMode: 'cover'}}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    marginLeft: 10,
                    color: selectedCategoryIndex == index ? '#fff' : '#6200EE',
                  }}>
                  {category.name}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.bottomBtnContainer}>
          <PrimaryButton
            title={'SELECT'}
            onPress={() => {
              Navigation.navigate('Home');
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#eee',
    marginBottom: 20,
  },
  avatarImage: {
    height: 400,
  },
  sliderContainer: {},
  slider: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  sliderLable: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
  },
  bottomBtnContainer: {
    margin: 5,
  },
  genderIconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: '#fff',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
});

export default AvatarScreen;
