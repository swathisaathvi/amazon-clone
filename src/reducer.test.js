import reducer from './reducer';

describe('reducer', () => {
  // Define the initial state to be used in tests
  const initialState = {
    basket: [],
    user: null,
  };

  it('should add an item to the basket', () => {
    const action = {
      type: 'ADD_TO_BASKET',
      item: {
        id: 1,
        price: 10,
      },
    };

    const state = reducer(initialState, action);

    // Assert that the basket now contains the added item
    expect(state.basket).toContainEqual(action.item);
  });

  it('should remove an item from the basket', () => {
    // Create a state with an item in the basket
    const stateWithItem = {
      basket: [
        {
          id: 1,
          price: 10,
        },
      ],
      user: null,
    };

    const action = {
      type: 'REMOVE_FROM_BASKET',
      id: 1,
    };

    const state = reducer(stateWithItem, action);

    // Assert that the item has been removed from the basket
    expect(state.basket).toHaveLength(0);
  });

  it('should handle an unknown action type', () => {
    const action = {
      type: 'UNKNOWN_ACTION',
    };

    const state = reducer(initialState, action);

    // Assert that the state remains unchanged for an unknown action
    expect(state).toEqual(initialState);
  });
});
