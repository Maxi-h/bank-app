import React from 'react';
import {render} from '@testing-library/react-native';
import LoadingListItem from '../src/presentation/components/LoadingListItem';
jest.mock('react-native-linear-gradient', () => 'LinearGradient');
let component: any;

describe('<LoadingListItem />', () => {
  beforeEach(() => {
    return (component = render(<LoadingListItem />));
  });
  it('Renderiza correctamente', () => {
    expect(component).toBeDefined();
  });
});
