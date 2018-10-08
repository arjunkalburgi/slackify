import React from 'react';
import { StyleSheet, Text, View, 
  TouchableOpacity, Image } from 'react-native';

export default class App extends React.Component {
  state = {
    imageUri: 'https://www.toornament.com/media/file/572269837784555520/logo_small?v=1500283770'
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ margin: 5, width:128, height:128 }} ref={(ref) => this.memeView = ref}>
          <Image source={{ uri: this.state.imageUri }} style={{ flex: 1, resizeMode: 'contain', width:null, height:null }} />
        </View>
        <Text>Open up App.js to start working on your app!</Text>
        <TouchableOpacity style={styles.button} onPress={this._onPick}>
          <Text>pick a pic!</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _onPick = async () => {
    console.log("here")
    this.upload("starr", this.state.imageUri)
  }

  async upload(name, uri) {
    console.log('Uploading %s with %s', name, uri);

    let formData = new FormData();
    formData.append('token', 'xoxs-20');
    formData.append('name', 'starr');
    formData.append('mode', 'data');
    formData.append('image', "data:image/png;base64,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");

    const response = await fetch(`https://arjunslife.slack.com/api/emoji.add`, {
      method: 'POST',
      body: formData
    }).then(function(response) {
      const responseText = await response.text();
      console.log(response)
      if (responseText) {
        console.log("upload did not work");
      } else {
        console.log("workeddd");
      }
    });
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 5,
    margin: 5,
    backgroundColor: '#ddd',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
