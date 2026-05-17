import React from 'react';

import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const subjects = [
  {
    id: '1',
    name: 'Reasoning',
  },

  {
    id: '2',
    name: 'English',
  },

  {
    id: '3',
    name: 'Quantitative Aptitude',
  },

  {
    id: '4',
    name: 'General Knowledge',
  },
];

function LearningSubjectsScreen({
  navigation,
}: any) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>
        Learning Subjects
      </Text>

      <FlatList
        data={subjects}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate(
                'LearningContent',
                {
                  subject: item.name,
                },
              )
            }>
            <Text style={styles.title}>
              {item.name}
            </Text>
          </TouchableOpacity>
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

  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#111',
  },

  card: {
    backgroundColor: '#4C7EFF',
    padding: 25,
    borderRadius: 18,
    marginBottom: 20,
  },

  title: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default LearningSubjectsScreen;