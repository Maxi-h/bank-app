import React from 'react';
import {render} from '@testing-library/react-native';
import ListItem from '../src/presentation/components/ListItem';
jest.mock('react-native-linear-gradient', () => 'LinearGradient');
let component: any;

describe('<LoadingListItem />', () => {
  beforeEach(() => {
    return (component = render(<ListItem />));
  });
  it('Renderiza correctamente', () => {
    expect(component).toBeDefined();
  });
});
