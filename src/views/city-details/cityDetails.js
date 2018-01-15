import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    ScrollView,
} from 'react-native'

import { Card } from 'react-native-elements'

import MapView from 'react-native-maps';

const { width, height } = Dimensions.get('window');
const screenHeight = width < height ? height : width;
const screenWidth = width < height ? width : height;

class cityDetails extends Component {

    static navigationOptions = ({ navigation, state }) => ({
        title: navigation.state.params.selectedCity.cityName,
    });

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.mapContainer}>
                    <MapView
                        style={styles.map}
                        provider={'google'}
                        showsUserLocation={true}
                        showsMyLocationButton={true}
                        showsCompass={true}
                        region={{
                            latitude: this.props.navigation.state.params.selectedCity.cityLatitude,
                            longitude: this.props.navigation.state.params.selectedCity.cityLongitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    >
                    </MapView>
                </View>
                {this.props.navigation.state.params.selectedCity.cityNearBy.map((item, index) => {
                    return (
                        <Card
                            key={index}
                            featuredTitle={item.locationName}
                            image={{ uri: item.locationImageUri }}
                            imageProps={{ resizeMode: 'cover' }}>

                            <View style={{ marginBottom: 10 }}>
                                <Text>{item.locationInfo}</Text>
                            </View>
                        </Card>
                    )
                })}

            </ScrollView>

        )
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mapContainer: {
        marginTop: 10,
        height: 300,
        width: screenWidth
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    }
})
export default cityDetails;