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

    const response = await fetch(`https://arjunslife.slack.com/customize/emoji`, {
      method: 'POST',
      body: JSON.stringify({
        name: name, 
        mode: 'data', 
        img: uri, 
        token: `xoxs-203156962768-203748619555-383631864182-1dc07553a72866b6b8f24efae35ad065b21b44d55f8bd3f69edb3e2785fdae9e`
      }),
      followAllRedirects: true
    });

    const responseText = await response.text();
    console.log(response.status)
    if (responseText) {
      console.log("upload did not work");
    } else {
      console.log("workeddd");
    }
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
