/* eslint-disable prettier/prettier */
// INFO: sample Redux API call
import * as actions from '../Types';

export const AddUserDetails = value => {
  return dispatch => {
    try {
      dispatch({
        type: actions.ADD_USER_DETAILS,
        payload: value,
      });
      return 'Success';
    } catch (e) {
      console.log('error Action ==> ', e);
      return e;
    }
  };
};
