import React from 'react';
import { Text, StyleSheet, Image, Button, SafeAreaView, View, Platform } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView, { Marker, Circle, Polyline, Callout } from 'react-native-maps';
import { check, request, openSettings, PERMISSIONS, RESULTS } from 'react-native-permissions';
import withPermission from './src/lib/with_permission';

const androidPermission = PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
const iosPermission = PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;

export class App extends React.Component {
  styles = StyleSheet.create({
    flex: {
      flex: 1,
    }
  })

  state = {
    currentPosition: null,
    markers: [],
    coordinates: [],
  }

  watchPosition() {
    Geolocation.watchPosition(
      ({ coords }) => {
        this.setState((state) => ({
          currentPosition: {
            ...coords,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          },
          coordinates: [
            ...state.coordinates,
            { latitude: coords.latitude, longitude: coords.longitude }
          ],
        }))
      },
      console.log,
      {
        enableHighAccuracy: true,
        distanceFilter: 0,
      }
    );
  }

  componentDidMount() {
    this.watchPosition();
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
    if (!this.state.currentPosition) return null;
    return (
        <MapView
          style={this.styles.flex}
          initialRegion={this.state.currentPosition}
          onPress={this.onMapPress}
        >
          <Polyline
            coordinates={this.state.coordinates}
            strokeWidth={5}
            strokeColor="red"
          />
          <Marker
            onPress={e => e.stopPropagation()}
            coordinate={this.state.currentPosition}
            title="Our Current Location"
            description="We did this during our online lecture because the COVID 19 virus made the world go really crazy"
          >
            <Callout>
              <Image
                style={{
                  width: 100,
                  height: 100
                }}
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Pok%C3%A9mon_Pikachu_art.png/220px-Pok%C3%A9mon_Pikachu_art.png' }}
              />
              <Button title="Edit" onPress={() => console.log('Hello, world!')} />
            </Callout>
          </Marker>
          {
            this.state.markers.map(marker => (
              // <Circle
              //   onPress={e => e.stopPropagation()}
              //   key={`${marker.coordinate.longitude}_${marker.coordinate.latitude}`}
              //   center={marker.coordinate}
              //   strokeColor="green"
              //   strokeWidth={5}
              //   radius={100}
              //
              // />
              <Marker
                draggable
                onDragEnd={() => console.log("I drag ended")}
                onPress={e => e.stopPropagation()}
                key={`${marker.coordinate.longitude}_${marker.coordinate.latitude}`}
                { ...marker}
              />
            ))
          }
        </MapView>
    );
  }
}
console.log("Hello", App)

export default withPermission(Platform.OS === 'ios' ? iosPermission : androidPermission)(App);
