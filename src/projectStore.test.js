import { createProjectStore } from './projectStore';
import { createStore } from 'redux';

jest.mock('redux', () => {
  return {
    createStore: jest.fn(() => 'pseudo store object')
  }
})


describe('Setup for project store', () => {
  beforeEach(() => {
    createStore.mockClear();
  });

  it('a new store is created', () => {
    const store = createProjectStore();
    expect(createStore).toHaveBeenCalledTimes(1);
    expect(store).toBe('pseudo store object');
  });
});
