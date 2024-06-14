import React from 'react';
import {
  ActivityIndicator,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {WIDTH} from '../../utils/constants';
import {colors} from '../../utils/colors';
import {useSharedValue} from 'react-native-reanimated';
import {navigationRef} from '../../navigation/RootNavigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '.';
import AppBar from '../components/AppBar';
import Typography from '../components/Typography';
import Box from '../components/Box';
import Button from '../components/Button';
import BottomSheet from '../components/BottomSheet';
import Divider from '../components/Divider';
import {IProduct} from '../../interfaces/product.interface';
import {useProductStore} from '../hooks/useProductStore';

const BOX_WIDTH = '92%';

type Props = NativeStackScreenProps<RootStackParamList, 'DetailsView'>;

const DetailsView = ({route}: Props) => {
  const {
    params: {data},
  } = route;
  const isOpen = useSharedValue(false);

  const {loading, error, deleteProd, message} = useProductStore();

  const toggleSheet = () => {
    isOpen.value = !isOpen.value;
  };

  const goToForm = (dataForm: IProduct) =>
    navigationRef.navigate('FormView', {data: dataForm, option: 'update'});

  return (
    <SafeAreaView style={styles.safeArea}>
      <AppBar title={'BANCO'} />
      <ScrollView contentContainerStyle={styles.content}>
        <Typography fontWeight="semibold" size="xl">
          {`ID: ${data.id}`}
        </Typography>
        <Typography fontWeight="normal" size="m">
          Información extra
        </Typography>

        <Box
          flexDirection="row"
          justifyContent="space-between"
          marginVertical={10}
          marginTop={40}
          width={BOX_WIDTH}
          marginHorizontal={15}>
          <Typography>Nombre</Typography>
          <Typography fontWeight="semibold">{data.name}</Typography>
        </Box>
        <Box
          flexDirection="row"
          justifyContent="space-between"
          marginVertical={10}
          width={BOX_WIDTH}
          marginHorizontal={15}>
          <Typography>Descripción</Typography>
          <Typography fontWeight="semibold">{data.description}</Typography>
        </Box>
        <Box
          flexDirection="row"
          marginVertical={10}
          width={BOX_WIDTH}
          marginHorizontal={15}>
          <Typography>Logo</Typography>
          <Image
            source={{
              uri: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
            }}
            style={styles.logo}
          />
        </Box>
        <Box
          flexDirection="row"
          justifyContent="space-between"
          marginVertical={10}
          width={BOX_WIDTH}
          marginHorizontal={15}>
          <Typography>Fecha liberación</Typography>
          <Typography fontWeight="semibold">{data.date_release}</Typography>
        </Box>
        <Box
          flexDirection="row"
          justifyContent="space-between"
          marginVertical={10}
          width={BOX_WIDTH}
          marginHorizontal={15}>
          <Typography>Fecha revisión</Typography>
          <Typography fontWeight="semibold">{data.date_revision}</Typography>
        </Box>
      </ScrollView>
      <Box justifyContent="center" padding={10}>
        <Typography
          fontWeight="semibold"
          color={error ? colors.dark.dangerColor : colors.dark.successColor}
          size="s">
          {message}
        </Typography>
      </Box>
      <Box
        paddingHorizontal={20}
        paddingBottom={Platform.OS === 'android' ? 10 : 0}>
        <Button
          title="Editar"
          backgroundColor="rgb(234, 236, 243)"
          onPress={() => goToForm(data)}
          marginTop={10}
        />
        <Button
          title="Eliminar"
          backgroundColor={colors.dark.dangerColor}
          onPress={toggleSheet}
          marginTop={10}
        />
      </Box>

      <BottomSheet isOpen={isOpen} toggleSheet={toggleSheet} snap={320}>
        <Typography fontWeight="semibold" size="l">
          Estás seguro de eliminar el producto{' '}
          <Typography fontWeight="bold" size="l">
            {data.name}
          </Typography>
        </Typography>

        <Divider marginTop={40} />

        {loading ? (
          <Box justifyContent="center" marginTop={20}>
            <ActivityIndicator />
          </Box>
        ) : (
          <Box marginHorizontal={15} paddingTop={10} alignItems="center">
            <Button
              title="Confirmar"
              backgroundColor="rgb(255, 221, 75)"
              marginVertical={5}
              width={'92%'}
              onPress={() => {
                deleteProd(data.id);
                toggleSheet();
              }}
            />
            <Button
              title="Cancelar"
              backgroundColor="rgb(234, 236, 243)"
              marginVertical={5}
              width={'92%'}
              onPress={toggleSheet}
            />
          </Box>
        )}
      </BottomSheet>
    </SafeAreaView>
  );
};

export default DetailsView;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  content: {
    width: WIDTH,
    alignItems: 'flex-start',
    padding: 20,
    elevation: 10,
    flex: 1,
  },
  logo: {
    width: 200,
    height: 110,
    marginLeft: 50,
    marginTop: 20,
    backgroundColor: 'transparent',
    resizeMode: 'contain',
  },
});
