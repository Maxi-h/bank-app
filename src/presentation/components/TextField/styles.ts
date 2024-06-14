import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {alignItems: 'flex-start', width: '100%', marginTop: 10},
  textInput: {
    height: 40,
    width: '100%',
    marginTop: 10,
    marginBottom: 5,
    borderColor: '#b8b8b8',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 4,
    paddingHorizontal: 10,
    textAlignVertical: 'top',
  },
  errorText: {
    fontSize: 10,
    color: 'red',
  },
  errorInput: {
    borderColor: 'red',
  },
});

export default styles;
