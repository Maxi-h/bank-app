import React from 'react';
import {TextInput} from 'react-native';
import styles from './styles';

export interface SearchbarProps {
  onChange?: (value: string) => void;
}
const Searchbar = ({onChange = () => {}}: SearchbarProps) => {
  return (
    <TextInput
      style={styles.textInput}
      placeholder="Search.."
      placeholderTextColor="#191919"
      onChangeText={text => onChange(text)}
    />
  );
};

export default Searchbar;
