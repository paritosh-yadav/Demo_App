import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions,
    TouchableHighlight,
} from 'react-native'

import { Card, Icon, SearchBar } from 'react-native-elements'

const { width, height } = Dimensions.get('window');
const screenHeight = width < height ? height : width;
const screenWidth = width < height ? width : height;

let renderTemperature = (temperatures, city) => {
    if (temperatures) {
        return temperatures.map((item, index) => {
            if (city == item.cityName)
                return (
                    <Text key={index} style={{ textAlign: 'center', fontWeight: 'bold' }}>{item.cityTemp} c</Text>
                )
        })
    }
}

let renderCards = (item, index, props) => {
    return (
        <TouchableHighlight
            key={index}
            onPress={() => { props.redirectToDetails(item) }}
            activeOpacity={0.7}
            underlayColor="transparent">
            <View>
                <Card
                    featuredTitle={item.cityName}
                    featuredSubtitle={item.citySubtitle}
                    image={{ uri: item.cityImageUri }}
                    imageProps={{ resizeMode: 'cover' }}>

                    <View style={{ marginBottom: 10 }}>
                        {renderTemperature(props.citiesTemperature, item.cityName)}
                    </View>

                    <View style={{ marginBottom: 10 }}>
                        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>{Math.round(item.cityDistance)} km away</Text>
                    </View>

                    <View style={{ marginBottom: 10 }}>
                        <Text>{item.cityInfo}</Text>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <Icon
                            raised
                            name={props.favorites.indexOf(item.cityName) > -1 ? 'favorite' : 'favorite-border'}
                            type='MaterialIcons'
                            color='#f50'
                            onPress={() => props.setFavorites(item.cityName)} />
                    </View>
                </Card>
            </View>
        </TouchableHighlight>
    )
}
let LandingPageView = (props) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.center}>
                <SearchBar
                    lightTheme
                    containerStyle={{ width: screenWidth - 30 }}
                    underlineColorAndroid='transparent'
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={(searchTerm) => props.setSearchTerm(searchTerm)}
                    placeholder='Search...' />
            </View>

            {props.cityData && props.searchedCity == null && props.cityData.map((item, index) => {
                return renderCards(item, index, props);
            })}

            {props.searchedCity && props.searchedCity.map((item, index) => {
                return renderCards(item, index, props);
            })}

            {!props.cityData &&
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 14 }}>Loading...</Text>
                </View>
            }
        </ScrollView>
    )
}
let styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    center: {
        alignItems: 'center'
    }
})

export default LandingPageView;