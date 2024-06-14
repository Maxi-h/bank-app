import {
  getProducts,
  updateProduct,
  verification,
} from '../src/services/fetchProduct';

test('Validate id', async () => {
  const data = await verification('one');
  expect(data).toBeFalsy();
});

test('product list', async () => {
  const {data} = await getProducts();
  expect(data.length).toBeGreaterThan(0);
});

test('update product', async () => {
  const {message} = await updateProduct(
    {
      name: 'Pedro Pablo',
      description: 'Alimno de la UNSAAC',
    },
    '1234',
  );
  expect(message).toBe('Product updated successfully');
});
