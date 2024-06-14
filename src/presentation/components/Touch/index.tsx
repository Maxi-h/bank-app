import React from 'react';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';

export interface ITouchProps extends RectButtonProps {
  children: React.ReactNode;
  accessibilityLabel?: string;
  testID?: string;
}

const Touch = React.forwardRef<RectButton, ITouchProps>(
  ({children, onPress, underlayColor, ...props}, ref) => {
    return (
      <RectButton
        ref={ref}
        onPress={onPress}
        activeOpacity={1}
        underlayColor={underlayColor || '#e1e1e165'}
        {...props}>
        {children}
      </RectButton>
    );
  },
);

export default Touch;
