/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, dimensions } from 'react-native';
import { SliderBox } from './component'; // use this when install from npm > 'react-native-image-slider-box'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        'https://source.unsplash.com/1024x768/?nature',
        'https://source.unsplash.com/1024x768/?water',
        'https://source.unsplash.com/1024x768/?girl',
        'https://source.unsplash.com/1024x768/?tree'
      ]
    };
  }

  onLayout = e => {
    this.setState({
      width: e.nativeEvent.layout.width,
      height: e.nativeEvent.layout.height
    });
  };

  render() {
    return (
      <View style={styles.container} onLayout={this.onLayout}>
        {/* <SliderBox images={this.state.images} /> */}

        {/* <SliderBox
          images={this.state.images}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
        /> */}

        {/* <SliderBox
          images={this.state.images}
          sliderBoxHeight={400}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
        /> */}

        {/* <SliderBox
          images={this.state.images}
          sliderBoxHeight={200}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
          parentWidth={this.state.width}
        /> */}

        {/* <SliderBox
          images={this.state.images}
          sliderBoxHeight={200}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
          dotColor="#FFEE58"
          inactiveDotColor="#90A4AE"
        /> */}

        {/* <SliderBox
          images={this.state.images}
          sliderBoxHeight={200}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
          dotColor="#FFEE58"
          inactiveDotColor="#90A4AE"
          dotStyle={{
            width: 15,
            height: 15,
            borderRadius: 15,
            marginHorizontal: 10,
            padding: 0,
            margin: 0
          }}
        /> */}

        <SliderBox
          images={this.state.images}
          sliderBoxHeight={200}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
          dotColor="#FFEE58"
          inactiveDotColor="#90A4AE"
          paginationBoxVerticalPadding={20}
          circleLoop
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
