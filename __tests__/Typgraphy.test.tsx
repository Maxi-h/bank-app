import React from 'react';
import {render} from '@testing-library/react-native';
import Typography from '../src/presentation/components/Typography';

let component: any;

describe('<Typography />', () => {
  beforeEach(() => {
    return (component = render(<Typography>abc</Typography>));
  });
  it('Renderiza correctamente', () => {
    expect(component).toBeDefined();
    expect(component).toBeTruthy();
  });
});
