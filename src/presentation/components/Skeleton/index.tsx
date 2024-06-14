import React, {useEffect} from 'react';
import {Animated, Easing, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';

interface SingleSkeletonProps {
  height: number;
  width?: any;
  borderRadius?: number;
  colorOne?: string;
  colorTwo?: string;
  backgroundColor?: string;
  testID?: string;
}

const SingleSkeleton = ({
  height,
  width = '100%',
  borderRadius = 0,
  colorOne = '#E4E8ED',
  colorTwo = '#F2F8FC',
  backgroundColor = '#E1E9EE',
  testID = 'skeleton-id',
}: SingleSkeletonProps) => {
  const MyAnimated = Animated.createAnimatedComponent(LinearGradient);
  const animatedValue = new Animated.Value(0);
  const myStyles = styles({height, width, borderRadius, backgroundColor});

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  });
  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-400, 400],
    extrapolate: 'clamp',
  });

  return (
    <View style={myStyles.container} testID={testID}>
      <MyAnimated
        colors={[colorOne, colorTwo, colorTwo, colorOne]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={[
          // { ...StyleSheet.absoluteFill },
          StyleSheet.absoluteFill,
          myStyles.animatedbones,
          {transform: [{translateX: translateX}]},
        ]}
      />
    </View>
  );
};

export default SingleSkeleton;
