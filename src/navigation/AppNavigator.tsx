import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';

import QuizSubjectsScreen from '../screens/QuizSubjectsScreen';

import PdfViewerScreen from '../screens/PdfViewerScreen';

import QuizScreen from '../screens/QuizScreen';

import LearningSubjectsScreen from '../screens/LearningSubjectsScreen';

import LearningContentScreen from '../screens/LearningContentScreen';

import ResultScreen from '../screens/ResultScreen';

import ReviewScreen from '../screens/ReviewScreen';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="QuizSubjects"
          component={QuizSubjectsScreen}
          options={{title: 'Choose Subject'}}
        />

        <Stack.Screen
          name="Quiz"
          component={QuizScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="LearningSubjects"
          component={LearningSubjectsScreen}
        />

        <Stack.Screen
          name="LearningContent"
          component={LearningContentScreen}
        />

        <Stack.Screen
          name="PdfViewer"
          component={PdfViewerScreen}
        />

        <Stack.Screen
          name="Result"
          component={ResultScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Review"
          component={ReviewScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;