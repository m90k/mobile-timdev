import React from 'react';
import {Image, Platform} from 'react-native';
import {Container, LoginInput, LoginButton, LoginButtonText} from './styles';

import logo from './../../assets/logo.png';

const Login = () => {
  return (
    <Container behavior="padding" enabled={Platform.OS === 'ios'}>
      <Image source={logo} />
      <LoginInput
        autoCapitalize="none"
        placeholder="Digite seu User Git"
        placeholderTextColor="#ddd"
        autoCorrect={false}
        autoFocus={true}
      />

      <LoginButton>
        <LoginButtonText>Entrar</LoginButtonText>
      </LoginButton>
    </Container>
  );
};

export default Login;
