import React from 'react';

import {
  FlatList,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import SubjectCard from '../components/SubjectCard';

import {subjects} from '../data/subjects';

function QuizSubjectsScreen({navigation}: any) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={subjects}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <SubjectCard
            title={item.title}
            image={item.image}
            onPress={() =>
              navigation.navigate('Quiz', {
                subject: item.title,
              })
            }
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
    padding: 20,
  },
});

export default QuizSubjectsScreen;