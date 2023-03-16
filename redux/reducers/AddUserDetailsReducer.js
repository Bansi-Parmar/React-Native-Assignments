/* eslint-disable prettier/prettier */
import * as actions from '../Types';

const initialState = {
  getUserDetails: {},
};

export const AddUserDetails = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case actions.ADD_USER_DETAILS:
      return {
        getUserDetails: payload,
      };

    default:
      return state;
  }
};
