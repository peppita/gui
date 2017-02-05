import { createProjectStore } from './projectStore';
import { init } from 'peppita-core';

jest.mock('peppita-core', () => {
  return {
    init: jest.fn(() => 'pseudo store object')
  }
})


describe('Setup for project store', () => {
  beforeEach(() => {
    init.mockClear();
  });

  it('a new store is created', () => {
    const store = createProjectStore();
    expect(init).toHaveBeenCalledTimes(1);
    expect(store).toBe('pseudo store object');
  });
});
