import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import COLORS from '../constants/colors';


function ResultScreen({route, navigation}: any) {
  const {
  score,
  total,
  subject,
  questions,
  selectedAnswers,
} = route.params;

  const percentage = (
    (score / total) *
    100
  ).toFixed(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>
          Quiz Result
        </Text>

        <View style={styles.scoreCircle}>
          <Text style={styles.scoreText}>
            {score}/{total}
          </Text>

        <Text style={styles.percentage}>
          {percentage}%
        </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.replace('Quiz', {
              subject,
            })
          }>
          <Text style={styles.buttonText}>
            Retest
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.homeButton}
          onPress={() =>
            navigation.navigate('Home')
          }>
          <Text style={styles.buttonText}>
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.reviewButton}
          onPress={() =>
            navigation.navigate('Review', {
              questions,
              selectedAnswers,
            })
          }>
          <Text style={styles.buttonText}>
            Review Answers
          </Text>
        </TouchableOpacity>

        
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F7FB',
    padding: 20,
  },

  scoreCircle: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#cfdbfa',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 40,
  },

  scoreText: {
    color: '#021eed',
    fontSize: 38,
    fontWeight: 'bold',
  },

  reviewButton: {
  backgroundColor: '#FF8C42',
  width: '100%',
  padding: 16,
  borderRadius: 14,
  marginTop: 15,
  },

  card: {
    backgroundColor: '#FFF',
    width: '100%',
    borderRadius: 25,
    padding: 30,
    alignItems: 'center',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  score: {
    fontSize: 54,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  
  percentage: {
    fontSize: 36,
    marginVertical: 20,
    color: COLORS.green,
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: COLORS.primary,
    width: '100%',
    padding: 16,
    borderRadius: 14,
    marginTop: 20,
  },

  homeButton: {
    backgroundColor: COLORS.secondary,
    width: '100%',
    padding: 16,
    borderRadius: 14,
    marginTop: 15,
  },

  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ResultScreen;