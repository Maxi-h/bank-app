import {StyleSheet} from 'react-native';
import {PADDING_HORIZONTAL, PADDING_VERTICAL} from '../../../utils/constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingVertical: PADDING_VERTICAL,
  },
  textContainer: {alignItems: 'flex-start'},
});

export default styles;
