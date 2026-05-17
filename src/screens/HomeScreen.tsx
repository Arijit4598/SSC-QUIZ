import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

function HomeScreen({navigation}: any) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>
        SSC Exam Preparation
      </Text>

      <Text style={styles.subHeading}>
        Practice & Learn Smartly
      </Text>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate(
            'QuizSubjects',
          )
        }>
        <LinearGradient
          colors={['#4C7EFF', '#6A5AE0']}
          style={styles.card}>
          <Text style={styles.cardTitle}>
            Quiz Mode
          </Text>

          <Text style={styles.cardDesc}>
            Practice SSC Questions
          </Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate(
            'LearningSubjects',
          )
        }>
        <LinearGradient
          colors={['#00B894', '#00CEC9']}
          style={styles.card}>
          <Text style={styles.cardTitle}>
            Learning Mode
          </Text>

          <Text style={styles.cardDesc}>
            Read PDF Notes
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
    padding: 20,
    justifyContent: 'center',
  },

  heading: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 10,
  },

  subHeading: {
    fontSize: 18,
    color: '#666',
    marginBottom: 40,
  },

  card: {
    borderRadius: 25,
    padding: 30,
    marginBottom: 25,
    elevation: 6,
  },

  cardTitle: {
    fontSize: 28,
    color: '#FFF',
    fontWeight: 'bold',
    marginBottom: 10,
  },

  cardDesc: {
    fontSize: 18,
    color: '#FFF',
  },
});

export default HomeScreen;