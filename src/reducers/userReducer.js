const ADD_USER = "ADD_USER";

export const userReducer = (state, action) => {
  switch (action.type) {
    case ADD_USER: {
      const users = [...state];
      users.push(action.payload);

      return users;
    }

    default:
      return state;
  }
};
