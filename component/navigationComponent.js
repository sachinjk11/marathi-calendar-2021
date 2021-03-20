import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './homeComponent';
import Panchang from './PanchangComponent';
import Astro from './AstroComponent';
import Fast from './FastComponent';
import Docs from './DocsComponent';
import Time from './TimeComponent';

import Abhi from './subcomp/time/AbhiComponent';
import Guru from './subcomp/time/GuruComponent';
import Ravi from './subcomp/time/RaviComponent';
import Amrut from './subcomp/time/AmrutComponent';
import Car from './subcomp/time/CarComponent';
import Hair from './subcomp/time/HairCutComponent';
import HomeTime from './subcomp/time/HomeComponent';
import Name from './subcomp/time/NameComponent';
import Siddhi from './subcomp/time/SidhiComponent';

import Eka from './subcomp/festival/EkaDashiComponent';
import FullW from './subcomp/festival/FullWComponent';
import Monday from './subcomp/festival/MondayComponent';
import FTH from './subcomp/festival/FTHComponent';
import ALL from './subcomp/festival/DetailsComponent';

import ART from './subcomp/docs/ArtiComponent';
import JOT from './subcomp/docs/JotishComponent';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const DailyPanchangStack = createStackNavigator();
const TimeStack = createStackNavigator();
const FastStack = createStackNavigator();
const DocsStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
    screenOptions={{
      headerStatusBarHeight:15,
      headerTitleAlign:"center"
    }}>
      <HomeStack.Screen name="दिनदर्शिका" component={Home} />
      <HomeStack.Screen name="पंचाग" component={Panchang} />
    </HomeStack.Navigator>
   );
}

function DailyPanchangScreen() {
  return (
    <DailyPanchangStack.Navigator
    screenOptions={{
      headerStatusBarHeight:15,
      headerTitleAlign:"center"
    }}>
      <DailyPanchangStack.Screen name="पंचाग" component={Panchang} />             
    </DailyPanchangStack.Navigator>
   );
}

function TimeScreen() {
  return (
    <TimeStack.Navigator
    screenOptions={{
      headerStatusBarHeight:15,
      headerTitleAlign:"center"
    }}>
      <TimeStack.Screen name="मुहूर्त" component={Time} /> 
      <TimeStack.Screen name="अभिजीत मुहूर्त" component={Abhi} />
      <TimeStack.Screen name="गुरुपुष्य योग" component={Guru} />
      <TimeStack.Screen name="रविपुष्य योग" component={Ravi} />    
      <TimeStack.Screen name="अमृतसिद्धी योग" component={Amrut} />    
      <TimeStack.Screen name="घर खरेदी मुहूर्त" component={HomeTime} />    
      <TimeStack.Screen name="वाहन खरेदी मुहूर्त" component={Car} />    
      <TimeStack.Screen name="नामकरण संस्कार" component={Name} />    
      <TimeStack.Screen name="मुंडन संस्कार" component={Hair} />     
      <TimeStack.Screen name="सर्वार्थसिद्धी योग" component={Siddhi} /> 
       
    </TimeStack.Navigator>
   );
}

function FastScreen() {
  return (
    <FastStack.Navigator
    screenOptions={{
      headerStatusBarHeight:15,
      headerTitleAlign:"center"
    }}>
      <FastStack.Screen name="उपवास / उत्सव" component={Fast} />
      <TimeStack.Screen name="एकादशी" component={Eka} />
      <TimeStack.Screen name="पौर्णिमा" component={FullW} />
      <TimeStack.Screen name="चतुर्थी" component={FTH} />
      <TimeStack.Screen name="सोमवार" component={Monday} />
      <TimeStack.Screen name="महत्व" component={ALL} />     
    </FastStack.Navigator>
   );
}

function DocsScreen() {
  return (
    <DocsStack.Navigator
    screenOptions={{
      headerStatusBarHeight:15,
      headerTitleAlign:"center"
    }}>
      <DocsStack.Screen name="इतर माहिती" component={Docs} />
      <TimeStack.Screen name="आरती/स्तोत्रे" component={ART} />
      <TimeStack.Screen name="राशि भविष्य" component={JOT} />             
    </DocsStack.Navigator>
   );
}

function MyTabs(){
  return (
      <Tab.Navigator
      activeColor="#ff6347"
      inactiveColor="#20b2aa"
      barStyle={{ backgroundColor: '#FFFFFF' }}
      labelStyle={{ fontSize: 10 }}
      style={{ backgroundColor: 'tomato' }}
      >
      <Tab.Screen
          name="Calendar"
          component={HomeStackScreen}
          options={{
          tabBarLabel: 'दिनदर्शिका',
          tabBarIcon: ({ color }) => (
              <Octicons name="calendar" color={color} size={24}  />
          ),
          }}
      />
      <Tab.Screen
          name="Panchang"
          component={DailyPanchangScreen}
          options={{
          tabBarLabel: 'पंचाग',
          tabBarIcon: ({ color }) => (
              <Ionicons name="ios-today" color={color} size={24} />
          ),
          }}
      />
       <Tab.Screen
          name="Time"
          component={TimeScreen}
          options={{
          tabBarLabel: 'मुहुर्त',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="event-seat" size={24} color={color} />
          ),
          }}
      />
      <Tab.Screen
          name="Fast"
          component={FastScreen}
          options={{
          tabBarLabel: 'उपवास/उत्सव',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="food-apple" size={24} color={color} />
          ),
          }}
      />
      <Tab.Screen
          name="astro"
          component={DocsScreen}
          options={{
          tabBarLabel: 'इतर माहिती',
          tabBarIcon: ({ color }) => (
              <AntDesign name="weibo-circle"  color={color} size={24} />
          ),
          }}
      />
      </Tab.Navigator>
    );
}

class Nevigate extends Component {

    constructor(props){
        super(props);
    }
    render(){
        return (
            <NavigationContainer>
                <MyTabs />
            </NavigationContainer>
          );
    }
}

export default Nevigate;