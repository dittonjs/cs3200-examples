import React from 'react';
import { SafeAreaView, Text, StyleSheet, Button, View, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class App extends React.Component {
  styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    image: {
      width: 300,
      height: 300,
    },
    placeHolder: {
      width: 300,
      height: 300,
      borderWidth: 1,
      borderRadius: 1,
      borderStyle: 'dashed'
    }
  })

  state = {
    imageSrc: null,
  }

  pickImage = () => {
    const options = {
      title: 'Select Image',
      customButtons: [
        {name: 'Test', title: "Test"},
        {name: 'Test', title: "Test"},
        {name: 'Test', title: "Test"},
        {name: 'Test', title: "Test"},
        {name: 'Test', title: "Test"},
        {name: 'Test', title: "Test"},
        {name: 'Test', title: "Test"},
        {name: 'Test', title: "Test"},
        {name: 'Test', title: "Test"},
        {name: 'Test', title: "Test"},
        {name: 'Test', title: "Test"},
        {name: 'Test', title: "Test"},
        {name: 'Test', title: "Test"},
        {name: 'Test', title: "Test"},
        {name: 'Test', title: "Test"},
        {name: 'Test', title: "Test"},
        {name: 'Test', title: "Test"},
        {name: 'Test', title: "Test"},
        
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log(response)
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
        console.log(source)
        this.setState({
          imageSrc: source,
        });
      }
    })
  }

  render() {
    return (
      <SafeAreaView style={this.styles.container}>
        <Button title="Pick Image" onPress={this.pickImage} />
        {this.state.imageSrc ? (
          <Image source={this.state.imageSrc} style={this.styles.image} />
        ) : (
          <View style={this.styles.placeHolder} />
        )}
      </SafeAreaView>
    );
  }
}
