/* eslint-disable react/react-in-jsx-scope */
import {View} from 'react-native';
import SingleSkeleton from '../Skeleton';
import styles from './styles';

const LoadingListItem = () => (
  <View style={styles.cards}>
    <View>
      <SingleSkeleton height={19.5} width={180} borderRadius={7.5} />
      <SingleSkeleton height={17} width={130} borderRadius={7.5} />
    </View>
    <SingleSkeleton height={25} width={25} borderRadius={10} />
  </View>
);

export default LoadingListItem;
