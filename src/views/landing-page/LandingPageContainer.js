import React, { Component } from 'react';
import { connect } from 'react-redux'

//Actions
import { fetchCityData, fetchWeatherData, addFavoriteCity, removeFavoriteCity } from '../../redux/landing-page/actions';

//Presentational View
import LandingPageView from './LandingPageView.js';

class LandingPageContainer extends Component {

	static navigationOptions = {
		title: 'Demo Application',
	};

	constructor(props) {
		super(props);
		this.state = {
			cityData: null,
			myCoordinates: null,
			citiesTemperature: null,
			searchTerm: '',
			searchedCity: null
		}
	}

	componentWillUnmount() {
		navigator.geolocation.clearWatch(this.watchId);
	}

	async componentDidMount() {
		this.watchId = navigator.geolocation.watchPosition(
			(position) => {
				this.setState({
					myCoordinates: position.coords
				})
			},
			(error) => this.setState({ error: error.message }),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
		);

		await this.props.fetchCityData();
		await this.calculateDistance();
		await Promise.all(
			this.props.cityDetails.map((item) => {
				return this.props.fetchWeatherData(item.cityName, '2a52d5d378406463d7f492655ae21161', 'metric');
			})
		).then((values) => {
			let citiesTemperature = [];
			values.map((item, index) => {
				citiesTemperature.push({
					cityName: item.city.name,
					cityTemp: item.list[0].main.temp
				})
			});
			this.setState({ citiesTemperature: citiesTemperature });
		});
	}

	calculateDistance() {
		let citiesWithDistance = [];
		this.props.cityDetails.map((item, index) => {
			cityDistance = this.getDistanceFromLatLonInKm(this.state.myCoordinates.latitude, this.state.myCoordinates.longitude, item.cityLatitude, item.cityLongitude);
			citiesWithDistance.push({ ...item, cityDistance: cityDistance })
		})
		this.setState({
			cityData: citiesWithDistance
		})
	}
	getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
		var R = 6371; // Radius of the earth in km
		var dLat = this.deg2rad(lat2 - lat1);  // deg2rad below
		var dLon = this.deg2rad(lon2 - lon1);
		var a =
			Math.sin(dLat / 2) * Math.sin(dLat / 2) +
			Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
			Math.sin(dLon / 2) * Math.sin(dLon / 2)
			;
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		var d = R * c; // Distance in km
		return d;
	}

	deg2rad(deg) {
		return deg * (Math.PI / 180)
	}

	setFavorites(city) {
		var favoritesList = this.props.favorites.slice();
		if (favoritesList.indexOf(city) > -1) {
			var index = favoritesList.indexOf(city);
			if (index !== -1) {
				favoritesList.splice(index, 1);
			}
			this.props.removeFavoriteCity(favoritesList);
		} else {
			favoritesList.push(city);
			this.props.addFavoriteCity(favoritesList);
		}
	}

	setSearchTerm(searchTerm) {
		let term = this;
		this.setState({
			searchTerm: searchTerm
		})
		if (searchTerm != '') {
			var found = this.state.cityData.find(function (element) {
				return element.cityName == term.toTitleCase(searchTerm);
			});
			if (found) {
				this.setState({
					searchedCity: [found]
				})
			} else {
				this.setState({
					searchedCity: undefined
				})
			}
		} else {
			this.setState({
				searchedCity: null
			})
		}
	}

	toTitleCase(str) {
		return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
	}

	redirectToDetails(item) {
		this.props.navigation.navigate('cityDetails', { selectedCity: item });
	}
	render() {
		return (
			<LandingPageView
				cityData={this.state.cityData}
				citiesTemperature={this.state.citiesTemperature}
				searchTerm={this.state.searchTerm}
				setSearchTerm={this.setSearchTerm.bind(this)}
				searchedCity={this.state.searchedCity}
				favorites={this.props.favorites}
				setFavorites={this.setFavorites.bind(this)}
				redirectToDetails={this.redirectToDetails.bind(this)} />
		)
	}
}

function mapStateToProps(state) {
	return {
		cityDetails: state.landingPage.cityDetails,
		isJaipurFavorite: state.landingPage.isJaipurFavorite,
		favorites: state.landingPage.favorites,
		jaipurDetails: state.landingPage.jaipurDetails,
		delhiDetails: state.landingPage.delhiDetails
	}
}

function mapDispatchToProps(dispatch) {
	return ({
		fetchCityData: () => dispatch(fetchCityData()),
		fetchWeatherData: (q, appid, units) => dispatch(fetchWeatherData(q, appid, units)),
		addFavoriteCity: (item) => dispatch(addFavoriteCity(item)),
		removeFavoriteCity: (item) => dispatch(removeFavoriteCity(item))
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPageContainer)