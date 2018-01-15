/**
 * Routes
 */
import {
  StackNavigator,
} from 'react-navigation';

import LandingPageContainer from "./views/landing-page/LandingPageContainer";
import cityDetails from "./views/city-details/cityDetails";

export default premmotorserp = StackNavigator({
  LandingPageContainer: {screen: LandingPageContainer},
  cityDetails: {screen: cityDetails},
});
