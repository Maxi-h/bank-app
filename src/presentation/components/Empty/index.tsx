import {Image, StyleSheet} from 'react-native';
import React from 'react';
import Typography from '../Typography';
import Box from '../Box';

const Empty = () => {
  return (
    <Box alignItems="center" padding={10}>
      <Image
        source={require('../../../../assets/empty-box.png')}
        style={styles.img}
      />
      <Typography fontWeight="light" size="xl">
        No hay registros
      </Typography>
    </Box>
  );
};

export default Empty;

const styles = StyleSheet.create({
  img: {height: 100, width: 100, marginBottom: 10},
});
