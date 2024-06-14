import React from 'react';
import {Image} from 'react-native';

export interface ICustomIcon {
  size?: 's' | 'm' | 'l';
}

const CustomIcon = ({size = 'm'}: ICustomIcon) => {
  const sizeValue =
    size === 's' ? 10 : size === 'm' ? 14 : size === 'l' ? 20 : 10;
  return (
    <Image
      source={require('../../../../assets/chevron.png')}
      style={{height: sizeValue, width: sizeValue}}
    />
  );
};
export {CustomIcon};
