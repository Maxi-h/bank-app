import {Dimensions, Platform} from 'react-native';

export const PADDING_HORIZONTAL = 14;
export const PADDING_VERTICAL = 10;
export const BASE_HEIGHT = 46;
export const ICON_SIZE = 20;
export const HEIGHT = Dimensions.get('window').height;
export const WIDTH = Dimensions.get('window').width;
export const NAVIGATION = {
  form: 'FormView',
  home: 'HomeView',
  details: 'DetailsView',
};
export const URI =
  Platform.OS === 'android' ? 'http://10.0.2.2' : 'http://localhost';
