import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView, { Marker } from 'react-native-maps';


export default class App extends React.Component {
  styles = StyleSheet.create({
    flex: {
      flex: 1,
    }
  })

  state = {
    region: null,
    markers: [],
  }

  componentDidMount() {
    Geolocation.watchPosition(
      ({ coords }) => {
        this.setState({
          region: {
            ...coords,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }
        })
      },
      console.log,
      {
        enableHighAccuracy: true,
        distanceFilter: 0,
      }
    );
  }

  onMapPress = (e) => {
    const { coordinate } = e.nativeEvent;
    this.setState((state) => {
      return {
        markers: [
          ...state.markers,
          {
            coordinate: coordinate,
            title: 'We clicked at this point!!!',
            description: 'Have some fun at this location',
          }
        ]
      }
    });

  }

  render() {
    if (!this.state.region) return null;
    return (
      <MapView
        style={this.styles.flex}
        initialRegion={this.state.region}
        onPress={this.onMapPress}
      >
        <Marker
          coordinate={this.state.region}
          title="Our Current Location"
          description="We did this during our online lecture because the COVID 19 virus made the world go really crazy"
        />
        {
          this.state.markers.map(marker => (
            <Marker
              key={`${marker.coordinate.longitude}_${marker.coordinate.latitude}`}
              { ...marker}
            />
          ))
        }
      </MapView>
    );
  }
}
