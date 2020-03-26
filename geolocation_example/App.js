import React from 'react';
import { Text, StyleSheet, Image, Button, SafeAreaView, View } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView, { Marker, Circle, Polyline, Callout } from 'react-native-maps';


export default class App extends React.Component {
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

  componentDidMount() {
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
      <SafeAreaView style={this.styles.flex}>
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
        <View style={this.styles.flex}>
          <Text>My birthday party</Text>
          <Text>My birthday party</Text>
          <Text>My birthday party</Text>
          <Text>My birthday party</Text>
          <Text>My birthday party</Text>
          <Button title="Click me!" onPress={console.log} />
        </View>
      </SafeAreaView>
    );
  }
}
