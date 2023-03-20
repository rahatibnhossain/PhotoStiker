import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';
import ImageViewer from './components/ImageViewer';
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react';
import IconButton from './components/IconButton';
import CircleButton from './components/CircleButton';


export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    }
    else {
      alert('You did not selete and image')
    }
  }

  const onReset =() => {  };
  const onAddSticker =() => {  };
  const onSaveImageAsync =() => {  };

  const PlaceholderImage = require('./assets/images/background-image.png')
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer PlaceholderImageSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>


      {showAppOptions ?

        (
          <View style={styles.optionsContainer}>
            <View style={styles.optionsRow}>
              <IconButton label="Reset" icon="refresh" onPress={onReset} />
              <CircleButton onPress={onAddSticker} />
              <IconButton label="Save" icon="save-alt" onPress={onSaveImageAsync} />

            </View>


          </View>
        )
        :
        (
          <View style={styles.footerContainer}>
            <Button theme="primary" label='Choose a photo' onPress={pickImageAsync} />
            <Button label='Use this photo' onPress={() => { setShowAppOptions(true) }} />
          </View>
        )
      }
      <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252346',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 50
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center'
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems:"center",
    flexDirection:"row"
  },

});
