import axios from './rest';

const Auth = {
  doGoogleAuthCallback(code: string) {
    return axios.get('/auth/google/callback', {
      params: {
        code
      }
    });
  },

  getProfile() {
    return axios.get('/auth/profile');
  },
  logout() {
    return axios.get('/auth/logout');
  }
};

// const GOOGLE_AUTH_ENDPOINT = '/auth/google';

// export { GOOGLE_AUTH_ENDPOINT };
export default Auth;
