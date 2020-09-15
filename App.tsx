import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';

export default function App() {
  let key = {};

  return (
    <View style={styles.container}>
      <Button
        title="Load Arweave Keyfile"
        onPress={async () => {
          const result = await DocumentPicker.getDocumentAsync({
            type: "application/json",
          });
          if (result.type === "cancel") return;
          try {
            const content = await FileSystem.readAsStringAsync(result.uri);
            key = JSON.parse(content);
          } catch (e) {
            // 
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
