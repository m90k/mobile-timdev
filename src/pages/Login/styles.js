import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

export const LoginInput = styled.TextInput`
  height: 46px;
  align-self: stretch;
  border-width: 1px;
  border-color: #ddd;
  margin-top: 20px;
  border-radius: 5px;
  padding: 10px;
  font-size: 18px;
`;

export const LoginButton = styled.TouchableOpacity`
  height: 46px;
  align-self: stretch;
  margin-top: 20px;
  border-radius: 5px;
  background-color: #eb4d4b;
  justify-content: center;
  align-items: center;
`;
export const LoginButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
