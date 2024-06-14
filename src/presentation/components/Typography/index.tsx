import React from 'react';
import {StyleSheet, Text} from 'react-native';

type FontWeight = 'light' | 'normal' | 'semibold' | 'bold' | 'black';
type Size = 's' | 'm' | 'l' | 'xl' | 'xxl';

export interface TypographyProps {
  children: React.ReactNode;
  color?: string;
  size?: Size;
  fontWeight?: FontWeight;
  fontFamily?: string;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  color = '#303030',
  size = 'm',
  fontWeight = 'normal',
  fontFamily,
}) => {
  const fontWeightValue =
    fontWeight === 'light'
      ? '100'
      : fontWeight === 'normal'
      ? '400'
      : fontWeight === 'semibold'
      ? '600'
      : fontWeight === 'bold'
      ? '800'
      : fontWeight === 'black'
      ? 900
      : '400';
  const sizeValue =
    size === 's'
      ? 11
      : size === 'm'
      ? 14
      : size === 'l'
      ? 17
      : size === 'xl'
      ? 20
      : size === 'xxl'
      ? 23
      : 14;
  return (
    <Text
      style={[
        styles.text,
        {fontWeight: fontWeightValue, fontSize: sizeValue, color, fontFamily},
      ]}>
      {children}
    </Text>
  );
};

export default Typography;

const styles = StyleSheet.create({
  text: {
    fontSize: 34,
    color: '#262626',
    textAlign: 'center',
  },
});
