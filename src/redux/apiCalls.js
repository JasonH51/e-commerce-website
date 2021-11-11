import {loginStart, loginSuccess, loginFailure} from './userRedux';
// import {publicRequest} from '../requestMethods';

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    dispatch(loginSuccess(user));
  } catch (e) {
    dispatch(loginFailure());
  }
};

// export const login = async (dispatch, user) => {
//   dispatch(loginStart());
//   try {
//     const res = await publicRequest.post('/auth/login', user);
//     dispatch(loginSuccess(res.data));
//   } catch (e) {
//     dispatch(loginFailure());
//   }
// };
