import React from 'react';
import {View} from 'react-native';
import {CustomIcon} from '../CustomIcon';
import Touch from '../Touch';
import Typography from '../Typography';
import styles from './styles';

interface IListItemContent {
  testID?: string;
  title?: string;
  subtitle?: string;
  showActionIndicator?: boolean;
}

const Content = React.memo(
  ({testID, title, subtitle, showActionIndicator = true}: IListItemContent) => {
    return (
      <View style={styles.container} testID={testID}>
        <View style={styles.textContainer}>
          <Typography fontWeight="semibold" size="l">
            {title}
          </Typography>
          <Typography>{subtitle}</Typography>
        </View>
        {showActionIndicator ? <CustomIcon /> : null}
      </View>
    );
  },
);

interface IListButtonPress extends IListItemButton {
  onPress?: () => void;
}

interface IListItemButton {
  title?: string;
  disabled?: boolean;
  underlayColor?: string;
}

const Button = React.memo(
  ({onPress, underlayColor, ...props}: IListButtonPress) => (
    <Touch
      onPress={onPress}
      underlayColor={underlayColor}
      enabled={!props.disabled}>
      <Content {...props} />
    </Touch>
  ),
);

interface IListItem
  extends Omit<IListItemContent, 'theme'>,
    Omit<IListItemButton, 'theme'> {
  backgroundColor?: string;
  onPress?: () => void;
}

const ListItem = React.memo(({...props}: IListItem) => {
  return <Button {...props} />;
});

export default ListItem;
