import React, {
  useEffect,
  useState,
} from 'react';

import {
  ActivityIndicator,
} from 'react-native';

import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {getLearningData} from '../api/learningApi';

function LearningContentScreen({
  route,
  navigation,
}: any) {
  const {subject} = route.params;

  const [data, setData] = useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchLearning();
  }, []);

  const fetchLearning = async () => {
    setLoading(true);

    const response =
      await getLearningData();

    const filteredData =
      response.filter(
        (item: any) =>
          item.subject === subject,
      );

    setData(filteredData);

    setLoading(false);
  };

  if (loading) {
    return (
      <View
        style={styles.loadingContainer}>
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

      <FlatList
        data={data}
        keyExtractor={(item, index) =>
          index.toString()
        }
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate(
                'PdfViewer',
                {
                  pdfUrl: item.pdfUrl,
                },
              )
            }>
            <Image
              source={{uri: item.thumbnail}}
              style={styles.image}
            />

            <View style={styles.pdfTag}>
              <Text style={styles.pdfText}>
                PDF
              </Text>
            </View>

            <Text style={styles.title}>
              {item.title}
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
    padding: 15,
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  pdfTag: {
    backgroundColor: '#E63946',
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },

  pdfText: {
    color: '#FFF',
    fontWeight: 'bold',
  },

  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#111',
  },

  card: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    elevation: 4,
  },

  image: {
    width: '100%',
    height: 180,
    borderRadius: 15,
    marginBottom: 15,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111',
  },
});

export default LearningContentScreen;