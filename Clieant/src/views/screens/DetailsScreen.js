import React, {useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet, Image} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {color} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import {SecondaryButton} from '../components/Button';

const DetailsScreen = ({navigation, route}) => {
  const item = route.params;
  let imageLink = '';
  const colorBtns = item.color;
  const [selectedColorBtn, setSelectedColorBtn] = useState(0);
  const [selectedBtnColor, setSelectedBtnColor] = useState();

  console.log(selectedBtnColor);

  if (selectedBtnColor === '#b8b7b6') {
    imageLink = item.Silver;
  } else if (selectedBtnColor === '#baae23') {
    imageLink = item.Gold;
  } else if (selectedBtnColor === '#000000') {
    imageLink = item.Black;
  } else if (selectedBtnColor === '#0a0078') {
    imageLink = item.Blue;
  } else if (selectedBtnColor === '#940011') {
    imageLink = item.Red;
  } else {
    imageLink = item.main_img;
  }

  console.log(imageLink);

  return (
    <SafeAreaView style={{backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Details</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 280,
          }}>
          <Image source={imageLink} style={{height: 220, width: 220}} />
        </View>
        <View style={style.colorPalette}>
          {colorBtns.map((btn, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setSelectedColorBtn(index);
                  setSelectedBtnColor(btn);
                }}
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    width: 30,
                    height: 30,
                    margin: 10,
                    borderRadius: 1000,
                    backgroundColor: btn,
                    borderColor: '#000000',
                    borderWidth: selectedColorBtn == index ? 3 : 0,
                  }}></View>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={style.details}>
          <View style={style.btnContainer}>
            <TouchableOpacity
              style={{
                backgroundColor: '#23036a',
                height: 30,
                width: 30,
                borderRadius: 1000,
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 10,
              }}>
              <Text
                style={{fontSize: 20, fontWeight: 'bold', color: '#BB86FC'}}>
                S
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#23036a',
                height: 30,
                width: 30,
                borderRadius: 1000,
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 10,
              }}>
              <Text
                style={{fontSize: 20, fontWeight: 'bold', color: '#BB86FC'}}>
                M
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#23036a',
                height: 30,
                width: 30,
                borderRadius: 1000,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{fontSize: 20, fontWeight: 'bold', color: '#BB86FC'}}>
                L
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{fontSize: 25, fontWeight: 'bold', color: COLORS.white}}>
              {item.name}
            </Text>
            <View style={style.iconContainer}>
              <Icon name="favorite-border" color={'#BB86FC'} size={25} />
            </View>
          </View>
          <Text style={style.detailsText}>{item.view_description}</Text>
          <Text style={style.priceText}>{`$${item.price}`}</Text>
          <View style={style.btnContainer}>
            <TouchableOpacity style={style.btn}>
              <Text style={{color: '#BB86FC', fontWeight: 'bold'}}>Demo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.btn}>
              <Text style={{color: '#BB86FC', fontWeight: 'bold'}}>
                Care Label
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginBottom: 10}}>
            <SecondaryButton title="Add to Cart" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 60,
    backgroundColor: '#6200EE',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  iconContainer: {
    backgroundColor: COLORS.white,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  detailsText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: COLORS.white,
  },
  colorPalette: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: 100,
    marginRight: 100,
    backgroundColor: '#f2e7fe',
    borderRadius: 20,
  },
  btnContainer: {
    marginTop: 10,
    marginBottom: 5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#23036a',
    width: 100,
    height: 30,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  priceText: {
    marginTop: 10,
    textAlign: 'center',
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default DetailsScreen;
