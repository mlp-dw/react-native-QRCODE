import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NativeBaseProvider, Text} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Provider } from 'react-redux';
import store from './store/store'
import DecodeScreen from './screens/DecodeScreen';
import HistoryScreen from './screens/HistoryScreen';
import EncodeScreen from './screens/EncodeScreen';
 
 
 const Tab = createBottomTabNavigator();
 
  
  export default function App() {
 
   function MyTabs() {
     return (
       <Tab.Navigator
       screenOptions={({ route }) => ({
         tabBarIcon: ({ focused, color, size }) => {
           let iconName;
 
           if (route.name === 'Decode') {
             iconName = focused ? 'qr-code-sharp' : 'qr-code-sharp';
           } else if (route.name === 'Encode') {
             iconName = focused ? 'cog' : 'cog';
           }else if (route.name === 'History') {
             iconName = focused ? 'information-circle-sharp' : 'information-circle-outline';
           }
 
           // You can return any component that you like here!
           return <Ionicons name={iconName} size={size} color={color} />;
         },
         tabBarActiveTintColor: 'tomato',
         tabBarInactiveTintColor: 'gray',
       })}
       >
           <Tab.Screen name="Decode" component={DecodeScreen} />
           <Tab.Screen name="Encode" component={EncodeScreen} />
           <Tab.Screen name="History" component={HistoryScreen} />
       </Tab.Navigator>
     );
   }
 
    return (
      <Provider store={store} >
        <NativeBaseProvider>
          <NavigationContainer>
            {MyTabs()}
          </NavigationContainer>
        </NativeBaseProvider>
      </Provider>
    );
  }
