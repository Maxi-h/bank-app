import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  sheet: {
    backgroundColor: '#f8f9ff',

    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    zIndex: 2,
    alignItems: 'center',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  container: {
    flex: 1,
    height: 250,
  },
  children: {paddingVertical: 16, width: '100%', flex: 1, alignItems: 'center'},
  header: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#d2d2d2',
    paddingVertical: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: 15,
  },
  touch: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  close: {width: 15, height: 15, resizeMode: 'center'},
});

export default styles;
