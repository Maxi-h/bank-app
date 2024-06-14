import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  appBar: {
    paddingBottom: 15,
    paddingTop: 7.5,
    marginBottom: 15,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: '#d4d4d4',
  },
  icon: {
    width: 22,
    height: 17,
    resizeMode: 'cover',
    marginTop: 3.5,
    marginRight: 10,
  },
  backContainer: {padding: 5},
  back: {
    width: 20,
    height: 20,
    resizeMode: 'cover',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  empty: {width: 25, height: 20},
});

export default styles;
