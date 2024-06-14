import {DimensionValue, View} from 'react-native';
import React from 'react';

type FlexDirection =
  | 'row'
  | 'column'
  | 'row-reverse'
  | 'column-reverse'
  | undefined;
type FlexAlignType =
  | 'baseline'
  | 'center'
  | 'flex-end'
  | 'flex-start'
  | 'stretch'
  | undefined;
type FlexJustifyStyle =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | undefined;

export interface BoxProps {
  width?: DimensionValue;
  alignItems?: FlexAlignType;
  justifyContent?: FlexJustifyStyle;
  flexDirection?: FlexDirection;
  margin?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  padding?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  paddingBottom?: number;
  paddingTop?: number;
  paddingLeft?: number;
  paddingRight?: number;
  backgroundColor?: string;
  children?: React.ReactNode;
}

const Box = (props: BoxProps) => {
  const {
    width = '100%',
    backgroundColor = 'transparent',
    flexDirection,
    alignItems,
    justifyContent,
    margin,
    marginVertical,
    marginHorizontal,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    padding,
    paddingHorizontal,
    paddingVertical,
    paddingBottom,
    paddingTop,
    paddingLeft,
    paddingRight,
    children,
  } = props;
  return (
    <View
      style={{
        width,
        backgroundColor,
        flexDirection,
        alignItems,
        justifyContent,
        margin,
        marginVertical,
        marginHorizontal,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        padding,
        paddingHorizontal,
        paddingVertical,
        paddingBottom,
        paddingTop,
        paddingLeft,
        paddingRight,
      }}

      //
    >
      {children}
    </View>
  );
};

export default Box;
