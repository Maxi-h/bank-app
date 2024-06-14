import React from 'react';
import {render} from '@testing-library/react-native';
import AppBar from '../src/presentation/components/AppBar';
let component: any;

describe('<DetailsView />', () => {
  beforeEach(() => {
    return (component = render(
      <AppBar title={'BANCO'} backPressEnabled={false} />,
    ));
  });
  it('Renderiza correctamente', () => {
    expect(component).toBeDefined();
  });
});
