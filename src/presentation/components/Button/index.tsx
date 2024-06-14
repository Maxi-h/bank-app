import {DimensionValue} from 'react-native';
import React from 'react';
import Touch from '../Touch';
import Typography from '../Typography';
import styles from './styles';

export interface ButtonProps {
  testID?: string;
  title?: string;
  width?: DimensionValue;
  backgroundColor?: string;
  margin?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  onPress?: () => void;
}

const Button = (props: ButtonProps) => {
  const {
    testID,
    title = 'abc..',
    width = '100%',
    backgroundColor = 'rgb(234, 236, 243)',
    margin,
    marginVertical,
    marginHorizontal,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    onPress = () => {},
  } = props;
  return (
    <Touch
      testID={testID}
      rippleRadius={5}
      style={[
        styles.btn,
        {
          width,
          backgroundColor,
          margin,
          marginVertical,
          marginHorizontal,
          marginTop,
          marginBottom,
          marginLeft,
          marginRight,
        },
      ]}
      onPress={onPress}
      //
    >
      <Typography fontWeight="bold">{title}</Typography>
    </Touch>
  );
};

export default Button;
