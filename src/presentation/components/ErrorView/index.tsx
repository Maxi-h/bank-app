import {Image, StyleSheet} from 'react-native';
import React from 'react';
import Typography from '../Typography';
import Box from '../Box';
import {colors} from '../../../utils/colors';

interface ErrorViewProps {
  errorText: string;
}

const ErrorView = (props: ErrorViewProps) => {
  const {errorText} = props;
  return (
    <Box alignItems="center" padding={10}>
      <Image
        source={require('../../../../assets/failed.png')}
        style={styles.img}
      />
      <Typography fontWeight="light" size="xl" color={colors.dark.dangerColor}>
        Error en {errorText}
      </Typography>
    </Box>
  );
};

export default ErrorView;

const styles = StyleSheet.create({
  img: {height: 100, width: 100, marginBottom: 10},
});
