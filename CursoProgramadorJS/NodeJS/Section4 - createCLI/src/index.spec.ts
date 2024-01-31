import { data } from './index';

describe('File Jest - Test', () => {
  test('Teste', () => {
    expect(1).toBe(1);
  });

  test('Testando var', () => {
    expect(data).toBe('Tadeu Neres');
  });
});
