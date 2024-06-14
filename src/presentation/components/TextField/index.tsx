import React from 'react';
import {TextInput, View} from 'react-native';
import Typography from '../Typography';
import {colors} from '../../../utils/colors';
import styles from './styles';

const TextFieldInput = (props: any) => {
  const {
    field: {name, onBlur, onChange, value},
    form: {errors, touched, setFieldTouched},
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];

  const disabledInput = props.readOnly;
  const disabledStyle = {color: disabledInput ? '#8f8f8f' : 'black'};

  return (
    <View style={styles.container}>
      {props.label && (
        <Typography fontWeight="semibold" color="#171717">
          {props.label}
        </Typography>
      )}
      <TextInput
        style={[
          styles.textInput,
          props.multiline && {height: props.numberOfLines * 40},
          hasError && styles.errorInput,
          disabledStyle,
        ]}
        value={value}
        onChangeText={text => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        autoCapitalize="none"
        {...inputProps}
      />
      {hasError && (
        <Typography
          fontWeight="normal"
          size="s"
          color={colors.dark.dangerColor}>
          {errors[name]}
        </Typography>
      )}
    </View>
  );
};

export default TextFieldInput;
