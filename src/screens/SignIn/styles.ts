import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;
export const Content = styled.View`
  padding: 0px 10px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.Text`
  font-size: 24px;
  color: #333;
  font-family: 'RobotoSlab-Medium';
  margin: 64px 0 24px;
`;

export const Logo = styled.Image`
  width: 100px;
  height: 90px;
  margin: 20px 0px;
`;
