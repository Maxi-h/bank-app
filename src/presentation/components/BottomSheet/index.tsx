import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import styles from './styles';

const DURATION = 300;

interface BottomSheetProps {
  isOpen: any;
  snap: number;
  toggleSheet: () => void;
  duration?: number;
  children: React.ReactNode;
}

function BottomSheet({
  isOpen,
  toggleSheet,
  duration = DURATION,
  snap = 120,
  children,
}: BottomSheetProps) {
  const height = useSharedValue(0);
  const progress = useDerivedValue(() =>
    withTiming(isOpen.value ? 0 : 1, {duration}),
  );

  const sheetStyle = useAnimatedStyle(() => ({
    transform: [{translateY: progress.value * 2 * height.value}],
  }));

  const backdropStyle = useAnimatedStyle(() => ({
    opacity: 1 - progress.value,
    zIndex: isOpen.value
      ? 1
      : withDelay(duration, withTiming(-1, {duration: 0})),
  }));

  return (
    <>
      <Animated.View style={[styles.backdrop, backdropStyle]}>
        <TouchableOpacity style={styles.flex} onPress={toggleSheet} />
      </Animated.View>

      <Animated.View
        onLayout={e => {
          height.value = e.nativeEvent.layout.height;
        }}
        style={[styles.sheet, sheetStyle, {height: snap}]}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.touch} onPress={toggleSheet}>
            <Image
              source={require('../../../../assets/close.png')}
              style={styles.close}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.children}>{children}</View>
      </Animated.View>
    </>
  );
}

export default BottomSheet;
