import React from 'react';
// import { View, Text } from "react-native";
import { StackNavigator } from 'react-navigation';
import styled from '../../interfaces/styled-components';

const StyledView = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text`
  color: blue;
  text-align: center;
`;

class LoginScreen extends React.Component {
  render() {
    return (
      <StyledView>
        <StyledText>Login Screen</StyledText>
      </StyledView>
    );
  }
}

export default StackNavigator({
  Login: {
    screen: LoginScreen
  }
});
