import React from 'react';

import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import COLORS from '../constants/colors';

function SubjectCard({title, image, onPress}: any) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}>
      <LinearGradient
        colors={['#4C7EFF', '#7B61FF']}
        style={styles.card}>
        <Image
          source={{uri: image}}
          style={styles.image}
        />

        <Text style={styles.title}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },

  card: {
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  image: {
    width: 60,
    height: 60,
    marginRight: 20,
  },

  title: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SubjectCard;