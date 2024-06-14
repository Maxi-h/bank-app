import {StyleSheet, View} from 'react-native';
import React from 'react';

export interface DividerProps {
  backgroundColor?: string;
  margin?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}

const Divider = (props: DividerProps) => {
  const {
    backgroundColor = '#d2d2d2',
    margin = 0,
    marginVertical = 0,
    marginHorizontal = 0,
    marginTop = 0,
    marginBottom = 0,
    marginLeft = 0,
    marginRight = 0,
  } = props;
  return (
    <View
      style={[
        styles.divider,
        {
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
    />
  );
};

export default Divider;

const styles = StyleSheet.create({
  divider: {width: '100%', height: 1},
});
