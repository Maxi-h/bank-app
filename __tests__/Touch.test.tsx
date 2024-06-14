import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Touch from '../src/presentation/components/Touch';
import Typography from '../src/presentation/components/Typography';

describe('Touch Component', () => {
  it('renders correctly', () => {
    const {getByText} = render(
      <Touch>
        <Typography>Press me</Typography>
      </Touch>,
    );

    expect(getByText('Press me')).toBeTruthy();
  });

  it('handles onPress event', () => {
    const onPressMock = jest.fn();
    const {getByText} = render(
      <Touch onPress={onPressMock}>
        <Typography>Press me</Typography>
      </Touch>,
    );

    fireEvent.press(getByText('Press me'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('applies custom underlayColor', () => {
    const {getByTestId} = render(
      <Touch underlayColor="#ff0000" testID="touchable">
        <Typography>Press me</Typography>
      </Touch>,
    );

    expect(getByTestId('touchable').props.underlayColor).toBe('#ff0000');
  });
});
