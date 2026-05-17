import React from 'react';

import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function ReviewScreen({route}: any) {
  const {questions, selectedAnswers} =
    route.params;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={questions}
        keyExtractor={(item, index) =>
          index.toString()
        }
        renderItem={({item, index}) => {
          const userAnswer =
            selectedAnswers[index];

          const isCorrect =
            userAnswer ===
            item.correctAnswer;

          return (
            <View style={styles.card}>
              <Text style={styles.question}>
                Q{index + 1}. {item.question}
              </Text>

              <Text
                style={[
                  styles.answer,
                  {
                    color: isCorrect
                      ? 'green'
                      : 'red',
                  },
                ]}>
                Your Answer:{' '}
                {userAnswer || 'Not Answered'}
              </Text>

              <Text style={styles.correct}>
                Correct Answer:{' '}
                {item.correctAnswer}
              </Text>

              <Text style={styles.explanation}>
                Explanation:{' '}
                {item.explanation}
              </Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
    padding: 15,
  },

  card: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 18,
    marginBottom: 15,
  },

  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  answer: {
    fontSize: 16,
    marginBottom: 8,
  },

  correct: {
    fontSize: 16,
    color: 'green',
    marginBottom: 8,
  },

  explanation: {
    fontSize: 15,
    color: '#444',
  },
});

export default ReviewScreen;