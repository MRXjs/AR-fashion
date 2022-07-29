import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableHighlight,
  AsyncStorage,
} from 'react-native';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import categories from '../../consts/categories';
import cloths from '../../consts/cloths';
import COLORS from '../../consts/colors';
import {useRoute} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import axios from 'axios';
import Urls from '../../consts/urls';

const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const HomeScreen = ({route, navigation}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [searchText, setSearchText] = useState();
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

  const jsonItems = JSON.stringify(cloths);
  const jsObgItems = JSON.parse(jsonItems);

  // --------------------------------------------------------------------------------------------------------------------------
  // useEffect(() => {
  //   const getData = async () => {
  //     async function getItems() {
  //       try {
  //         const response = await axios.get(Urls.itemsGet);

  //         return response.data;
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     }

  //     setData(await getItems());
  //   };
  //   getData();
  // }, []);

  // console.log(data);

  // ------------------------------------------------------------------------------------------------------------------------
  // SearchFilter function
  // const searchBar = cloths => {
  //   return cloths.filter(
  //     item => item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1,
  //   );
  // };

  // searchBar(cloths);

  // ------------------------------------------------------------------------------------------------------------------------

  const ListCategories = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.categoriesListContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            <View
              style={{
                backgroundColor:
                  selectedCategoryIndex == index ? '#6200EE' : '#f2e7fe',
                ...style.categoryBtn,
              }}>
              <View style={style.categoryBtnImgCon}>
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
      </ScrollView>
    );
  };

  const Card = ({cloth}) => {
    return (
      <TouchableHighlight
        underlayColor={'#fff'}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('DetailsScreen', cloth)}>
        <View style={style.card}>
          <View style={{alignItems: 'center'}}>
            <Image source={cloth.main_img} style={{height: 120, width: 120}} />
          </View>
          <View style={{marginHorizontal: 20}}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000000'}}>
              {cloth.name}
            </Text>
            <Text style={{fontSize: 0, color: COLORS.grey, marginTop: 2}}>
              {}
            </Text>
          </View>
          <View
            style={{
              marginTop: 5,
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              ${cloth.price}
            </Text>
            <View style={style.addToCartBtn}>
              <Icon name="add" size={20} color={COLORS.white} />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 28, color: '#6200EE'}}>Hello,</Text>
            <Text
              style={{
                fontSize: 28,
                fontWeight: 'bold',
                marginLeft: 10,
                color: '#6200EE',
              }}>
              First Name
            </Text>
          </View>
          <Text style={{marginTop: 5, fontSize: 22, color: '#BB86FC'}}>
            What do you want tody
          </Text>
        </View>
        <Image
          source={require('../../assets/img/person.png')}
          style={{height: 50, width: 50, borderRadius: 25}}
        />
      </View>

      <View
        style={{
          marginTop: 40,
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <View style={style.inputContainer}>
          <Icon name="search" size={28} />
          <TextInput
            style={{flex: 1, fontSize: 18}}
            placeholder="Search for Cloth"
            onChangeText={text => {
              setSearchText(text);
            }}
          />
        </View>
        <View style={style.sortBtn}>
          <Icon name="tune" size={28} color={'#fff'} />
        </View>
      </View>
      <View>
        <ListCategories />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={cloths}
        renderItem={({item}) => <Card cloth={item} />}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: '#6200EE',
    borderBottomEndRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
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
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: '#BB86FC',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
