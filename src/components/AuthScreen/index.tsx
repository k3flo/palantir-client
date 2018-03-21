import * as React from 'react';
// import { AuthProps } from './types';
import { Button } from 'antd';
import styled from 'styled-components';

// api
import auth from 'api/auth';

class AuthScreen extends React.Component {
  state = {};

  handleGoogleAuth = async () => {
    try {
      const googleAuthRes = await auth.googleLogin();
      console.log(googleAuthRes);
    } catch (error) {
      throw error;
    }
  };

  render() {
    return (
      <STWrapper>
        <div>
          <STGreet>Hello kekus</STGreet>
          <Button onClick={this.handleGoogleAuth} type="primary" icon="google-plus" size="large">
            Sign in with Google
          </Button>
        </div>
      </STWrapper>
    );
  }
}

const STGreet = styled.p`
  margin-bottom: 10px;
  font-family: Roboto, sans-serif;
  font-size: 32px;
  text-align: center;
  color: #000;
`;

const STWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export default AuthScreen;
