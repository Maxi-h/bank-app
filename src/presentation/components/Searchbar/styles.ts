import {StyleSheet} from 'react-native';
import {WIDTH} from '../../../utils/constants';

const styles = StyleSheet.create({
  textInput: {
    height: 45,
    width: WIDTH - 50,
    marginHorizontal: 25,
    marginTop: 10,
    marginBottom: 5,
    borderColor: '#808080',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 4,
    paddingHorizontal: 10,
    textAlignVertical: 'top',
  },
});

export default styles;
