import React from 'react';
import {render} from '@testing-library/react-native';
import Box from '../src/presentation/components/Box';

let component: any;

describe('<DetailsView />', () => {
  beforeEach(() => {
    return (component = render(<Box />));
  });
  it('Renderiza correctamente', () => {
    expect(component).toBeDefined();
  });
});
