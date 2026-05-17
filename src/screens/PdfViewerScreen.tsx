import React from 'react';

import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import Pdf from 'react-native-pdf';

function PdfViewerScreen({
  route,
}: any) {
  const {pdfUrl} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Pdf
        source={{
          uri: pdfUrl,
          cache: true,
        }}
        trustAllCerts={false}
        onLoadComplete={(
          numberOfPages,
        ) => {
          console.log(
            `Pages: ${numberOfPages}`,
          );
        }}
        onError={error => {
          console.log(error);
        }}
        renderActivityIndicator={() => (
          <ActivityIndicator
            size="large"
          />
        )}
        style={styles.pdf}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  pdf: {
    flex: 1,
    width: '100%',
  },
});

export default PdfViewerScreen;