import {
  ActivityIndicator,
  Keyboard,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {Formik, Field} from 'formik';
import * as yup from 'yup';
import {WIDTH} from '../../utils/constants';
import {
  addDays,
  addYears,
  format,
  parse,
  isValid as isValidDate,
} from 'date-fns';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList, initialParam} from '.';
import TextFieldInput from '../components/TextField';
import AppBar from '../components/AppBar';
import Typography from '../components/Typography';
import Button from '../components/Button';
import {verification} from '../../services/fetchProduct';
import debounce from '../../utils/debounce';
import {useProductStore} from '../hooks/useProductStore';
import {colors} from '../../utils/colors';
import Box from '../components/Box';

const today = new Date();
today.setHours(0, 0, 0, 0);

type Props = NativeStackScreenProps<RootStackParamList, 'FormView'>;

const FormView = ({route}: Props) => {
  const {
    params: {data, option},
  } = route;

  const {loading, error, create, update, message} = useProductStore();

  const formValidationSchema = yup.object().shape({
    id: yup
      .string()
      .min(3, ({min}) => `mínimo ${min} caracteres`)
      .max(10, ({max}) => `máximo ${max} caracteres`)
      .required('ID es requerido'),
    name: yup
      .string()
      .min(5, ({min}) => `mínimo ${min} caracteres`)
      .max(100, ({max}) => `máximo ${max} caracteres`)
      .required('Este campo es requerido!'),
    description: yup
      .string()
      .min(10, ({min}) => `mínimo ${min} caracteres`)
      .max(200, ({max}) => `máximo ${max} caracteres`)
      .required('Este campo es requerido!'),
    logo: yup.string().required('Este campo es requerido!'),
    date_release: yup
      .date()
      .min(
        option === 'create'
          ? today
          : parse(data.date_release, 'yyyy-MM-dd', new Date()),
        'La fecha debe ser mayor o igual a la fecha actual',
      )
      .typeError('Formato no valido, use YYYY-MM-DD')
      .required('Este campo es requido!'),
    date_revision: yup.date().required('Este campo es requido!'),
  });

  const validation = async (id: string) => {
    if (id.length >= 3) {
      try {
        const response = await verification(id);
        return response;
      } catch (err) {
        return false;
      }
    }
    return false;
  };

  const customHandleBlur =
    (field: string, handleBlur: any, value: string, setFieldValue: any) =>
    (event: React.FocusEvent<any>) => {
      const originalValue = value;
      const dateValid = isValidDate(
        parse(originalValue, 'yyyy-MM-dd', new Date()),
      );
      if (dateValid) {
        const addDay = addDays(originalValue, 1);
        setFieldValue(
          'date_revision',
          format(addYears(addDay, 1), 'yyyy-MM-dd'),
        );
      }
      handleBlur(field)(event);
    };

  return (
    <SafeAreaView style={styles.safeArea}>
      <AppBar title={'BANCO'} />
      <ScrollView contentContainerStyle={styles.form}>
        <Typography fontWeight="bold" size="xxl">
          Formulario de reghistro
        </Typography>
        <Formik
          validationSchema={formValidationSchema}
          initialValues={{...data}}
          onSubmit={values => {
            Keyboard.dismiss();
            option === 'create' ? create(values) : update(values, data.id);
          }}>
          {({
            handleSubmit,
            values,
            resetForm,
            setErrors,
            setFieldValue,
            handleChange,
            setValues,
            handleBlur,
          }) => (
            <>
              <Field
                component={TextFieldInput}
                name="id"
                label="ID"
                onChange={debounce(async () => {
                  const v = await validation(values.id);
                  console.debug(v);
                  if (v === true) {
                    setErrors({id: 'ID no valido'});
                  }
                }, 200)}
                onBlur={handleBlur('id')}
              />
              <Field component={TextFieldInput} name="name" label="Nombre" />
              <Field
                component={TextFieldInput}
                name="description"
                label="Descripción"
              />
              <Field component={TextFieldInput} name="logo" label="Logo" />
              <Field
                component={TextFieldInput}
                name="date_release"
                label="Fecha Liberación"
                onChange={handleChange('date_release')}
                onBlur={customHandleBlur(
                  'date_release',
                  handleBlur,
                  values.date_release,
                  setFieldValue,
                )}
              />
              <Field
                component={TextFieldInput}
                name="date_revision"
                keyboard="date"
                label="Fecha Revisión"
                readOnly
              />

              <Box justifyContent="center" padding={10}>
                <Typography
                  fontWeight="semibold"
                  color={
                    error ? colors.dark.dangerColor : colors.dark.successColor
                  }
                  size="s">
                  {message}
                </Typography>
              </Box>

              {loading ? (
                <Box justifyContent="center" marginTop={20}>
                  <ActivityIndicator />
                </Box>
              ) : (
                <>
                  <Button
                    testID="save-product"
                    title="Enviar"
                    backgroundColor="rgb(255, 221, 75)"
                    onPress={handleSubmit}
                    marginTop={30}
                  />
                  <Button
                    title="Reiniciar"
                    backgroundColor="rgb(234, 236, 243)"
                    onPress={() => {
                      resetForm();
                      setValues({...initialParam});
                    }}
                    marginTop={10}
                  />
                </>
              )}
            </>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FormView;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  form: {
    width: WIDTH,
    alignItems: 'flex-start',
    padding: 20,
    elevation: 10,
    flex: 1,
  },
});
