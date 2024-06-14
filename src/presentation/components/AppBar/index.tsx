import React from 'react';
import {Image, View} from 'react-native';
import Touch from '../Touch';
import Typography from '../Typography';
import {navigationRef} from '../../../navigation/RootNavigation';
import styles from './styles';

interface AppBarProps {
  title: string;
  backPressEnabled?: boolean;
}

const Space = () => <View style={styles.empty} />;

const AppBar = (props: AppBarProps) => {
  const {title, backPressEnabled = true} = props;

  return (
    <View style={styles.appBar}>
      {backPressEnabled ? (
        <Touch
          onPress={() => navigationRef.goBack()}
          style={styles.backContainer}
          rippleColor={'#d4d4d490'}
          rippleRadius={20}>
          <Image
            source={require('../../../../assets/back.png')}
            style={styles.back}
          />
        </Touch>
      ) : (
        <Space />
      )}
      <View style={styles.titleContainer}>
        <Image
          source={require('../../../../assets/bank-icon.png')}
          style={styles.icon}
        />
        <Typography color="#384671" fontWeight="semibold" size="l">
          {title}
        </Typography>
      </View>
      <Space />
    </View>
  );
};

export default AppBar;
