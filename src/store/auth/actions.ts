import {
  // GOOGLE_AUTH_ERROR,
  // INIT_GOOGLE_AUTH
  SET_USER_DATA
} from './constants';
import Auth from 'api/auth';

export function doGoogleAuthCallback(code: string) {
  return async (dispatch: any) => {
    try {
      const response: any = await Auth.doGoogleAuthCallback(code);
      // const userData = await response.json();
      dispatch({ type: SET_USER_DATA, payload: response.data });
      return response.data;
      // console.log(userData);
      // dispatch({ type: FINISH_GOOGLE_AUTH });
    } catch (error) {
      // dispatch({ type: GOOGLE_AUTH_ERROR });
      throw error;
    }
  };
}

export const getProfile = () => {
  return async (dispatch: any) =>
    new Promise(async (resolve, reject) => {
      try {
        const user = await Auth.getProfile();
        dispatch({ type: SET_USER_DATA, payload: user.data });
        console.log(user.data);
        resolve(user.data);
      } catch (error) {
        reject(error);
      }
    });
};
