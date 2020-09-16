import React, {useContext, useState} from 'react';
import {Container, Content, Logo} from './styles';
import {useAuth} from '../../contexts/auth';
import Input from '../../components/Input';
import Button from '../../components/Button';
import logo from '../../assets/logo.png';
const SignIn: React.FC = () => {
  const {signIn} = useAuth();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  async function handleSignIn() {
    signIn(email, password);
  }
  return (
    <Container>
      <Logo source={logo} styles={{width: 100, height: 80}} />
      <Content>
        <Input
          value={email}
          icon="mail"
          placeholder="Digite seu e-mail"
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          value={password}
          icon="lock"
          placeholder="Digite seu e-mail"
          onChangeText={(text) => setPassword(text)}
        />
        <Button onPress={handleSignIn} title="Entrar" />
      </Content>
    </Container>
  );
};

export default SignIn;
