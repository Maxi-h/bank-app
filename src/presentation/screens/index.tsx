import {addYears, format} from 'date-fns';
import {IProduct} from '../../interfaces/product.interface';

export const initialParam: IProduct = {
  id: '',
  name: '',
  description: '',
  logo: '',
  date_release: format(Date.now(), 'yyyy-MM-dd'),
  date_revision: format(addYears(Date.now(), 1), 'yyyy-MM-dd'),
};

export type RootStackParamList = {
  HomeView: undefined;
  FormView: {data: IProduct; option: 'create' | 'update'};
  DetailsView: {data: IProduct};
};
