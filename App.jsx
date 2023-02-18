import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { useGetAllPhotosQuery } from './store/api/photos';

//Components
import HomeScreen from './screens/HomeScreen';
import PhotoScreen from './screens/PhotoScreen';

function App() {


  const Stack = createNativeStackNavigator();

  return (
    <>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Photo" component={PhotoScreen} />
      </Stack.Navigator>
    </>
  );
}

export default App;
