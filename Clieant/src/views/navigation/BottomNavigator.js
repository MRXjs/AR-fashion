import React from 'react';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import {View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import FavoriteList from '../screens/FavoriteList';
import VirtualRoom from '../screens/VirtualRoom';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
        },
        showLabel: false,
        activeTintColor: '#6200EE',
      }}>
      <Tab.Screen
        name="VirtualRoom"
        component={VirtualRoom}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="3d-rotation" color={color} size={28} />
          ),
        }}
      />

      <Tab.Screen
        component={HomeScreen}
        name="HomeScreen"
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="shopping-bag" color={color} size={28} />
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <View
              style={{
                height: 60,
                width: 60,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: COLORS.white,
                borderColor: '#6200EE',
                borderWidth: 2,
                borderRadius: 30,
                top: -25,
                elevation: 5,
              }}>
              <Icon name="search" color={'#6200EE'} size={28} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Favorite"
        component={FavoriteList}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="favorite" color={color} size={28} />
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="shopping-cart" color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
