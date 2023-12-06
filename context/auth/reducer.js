export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload.token,
        error: null,
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        user: null,
        error: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        error: null,
      };

    case 'USER_INFO':
      return {
        ...state,
        userInfo: action.payload,
        error: null,
      };

    case 'USER_CHARACTERISTICS':
      return {
        ...state,
        userCharacteristics: action.payload,
        error: null,
      };

    default:
      return state;
  }
};
