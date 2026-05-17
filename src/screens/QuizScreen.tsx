import React, {
  useEffect,
  useState,
} from 'react';
import {
  ActivityIndicator,
} from 'react-native';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import COLORS from '../constants/colors';
import {getQuestionsBySubject} from '../api/quizApi';



function QuizScreen({route, navigation}: any) {
  const {subject} = route.params;

  const [questions, setQuestions] =
  useState<any[]>([]);

  const [loading, setLoading] =
  useState(true);

  useEffect(() => {
  fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
  setLoading(true);

  const data =
    await getQuestionsBySubject(subject);

  setQuestions(data);

  setLoading(false);
  } ;
  

  const [currentQuestionIndex, setCurrentQuestionIndex] =
    useState(0);

  const [selectedAnswers, setSelectedAnswers] =
    useState<any>({});

  const [timeLeft, setTimeLeft] = useState(30);

  const currentQuestion =
  questions[currentQuestionIndex] || {};

  useEffect(() => {
    if (timeLeft === 0) {
      handleNext();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000); 

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleOptionSelect = (option: string) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: option,
    });
  };

  const handleNext = () => {
    if (
      currentQuestionIndex <
      questions.length - 1
    ) {
      setCurrentQuestionIndex(prev => prev + 1);
      setTimeLeft(30);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setTimeLeft(30);
    }
  };

  const handleSubmit = () => {
  let finalScore = 0;

  questions.forEach(
    (question, index) => {
      if (
        selectedAnswers[index] ===
        question.correctAnswer
      ) {
        finalScore++;
      }
    },
  );

  navigation.navigate('Result', {
    score: finalScore,
    total: questions.length,
    subject,
    questions,
    selectedAnswers,
  });
  };

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator
          size="large"
          color="#4C7EFF"
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>
        {subject}
      </Text>

      <View style={styles.paletteContainer}>
      {questions.map((_, index) => {
    const isSelected =
      currentQuestionIndex === index;

    const isAnswered =
      selectedAnswers[index];

    return (
      <TouchableOpacity
        key={index}
        style={[
        styles.paletteButton,

        isAnswered &&
          styles.answeredPalette,

        isSelected &&
          styles.currentPalette,
      ]}
        onPress={() => {
          setCurrentQuestionIndex(index);

          setTimeLeft(30);
        }}>
        <Text style={styles.paletteText}>
          {index + 1}
        </Text>
      </TouchableOpacity>
    );
  })}
  </View>

      <View style={styles.topBar}>
        <Text style={styles.questionCount}>
          Question {currentQuestionIndex + 1}/
          {questions.length}
        </Text>

        <Text
          style={[
            styles.timer,
            timeLeft <= 10 && styles.redTimer,
          ]}>
          {timeLeft}s
        </Text>
      </View>

      <View style={styles.progressBarContainer}>
        <View
          style={[
            styles.progressBar,
            {
              width: `${
                ((currentQuestionIndex + 1) /
                  questions.length) *
                100
              }%`,
            },
          ]}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.question}>
          {currentQuestion?.question}
        </Text>

        {currentQuestion?.options?.map(
          (option: string, index: number) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                selectedAnswers[
                  currentQuestionIndex
                ] === option &&
                  styles.selectedOption,
              ]}
              onPress={() =>
                handleOptionSelect(option)
              }>
              <Text style={styles.optionText}>
                {option}
              </Text>
            </TouchableOpacity>
          ),
        )}
      </View>

      <View style={styles.bottomButtons}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={handlePrevious}>
          <Text style={styles.navText}>
            Previous
          </Text>
        </TouchableOpacity>

        {currentQuestionIndex ===
        questions.length - 1 ? (
          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleSubmit}>
            <Text style={styles.navText}>
              Submit
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.navButton}
            onPress={handleNext}>
            <Text style={styles.navText}>
              Next
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
    padding: 20,
  },

  progressBarContainer: {
      width: '100%',
      height: 10,
      backgroundColor: '#DDD',
      borderRadius: 10,
      marginBottom: 20,
    },

    progressBar: {
      height: 10,
      backgroundColor: '#4C7EFF',
      borderRadius: 10,
    },

  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 20,
  },

  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  questionCount: {
    fontSize: 18,
    color: COLORS.black,
  },

  timer: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.green,
  },

  redTimer: {
    color: COLORS.red,
  },

  card: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 20,
  },

  question: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: COLORS.black,
  },

  optionButton: {
    backgroundColor: '#E8ECF5',
    padding: 16,
    borderRadius: 12,
    marginBottom: 15,
  },

  selectedOption: {
    backgroundColor: COLORS.primary,
  },

  optionText: {
    fontSize: 18,
    color: COLORS.black,
  },

  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },

  navButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 12,
  },

  submitButton: {
    backgroundColor: COLORS.green,
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 12,
  },

  navText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paletteContainer: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginBottom: 20,
},

paletteButton: {
  width: 40,
  height: 40,
  borderRadius: 20,
  backgroundColor: '#D3D3D3',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 5,
},

currentPalette: {
  backgroundColor: '#4C7EFF',
},

answeredPalette: {
  backgroundColor: '#28A745',
},

paletteText: {
  color: '#FFF',
  fontWeight: 'bold',
},
});

export default QuizScreen;