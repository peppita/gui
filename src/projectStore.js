import { createStore } from 'redux';

export function createProjectStore() {
  return createStore(
    (state, action) => action
  )
}
