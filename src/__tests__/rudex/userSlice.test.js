const userReducer = require('../../redux/userSlice').default;
const setUserInfo = require('../../redux/userSlice').setUserInfo;

test('should handle initial state', () => {
  expect(userReducer(undefined, {})).toEqual({ name: '', firstName: '' });
});

test('should handle setUserInfo', () => {
  const initialState = { name: '', firstName: '' };
  const action = setUserInfo({ name: 'John', firstName: 'Doe' });
  const state = userReducer(initialState, action);
  expect(state).toEqual({ name: 'John', firstName: 'Doe' });
});
