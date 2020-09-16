import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: #fcfcfc;
`;
export const Logo = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 140px;
  height: 30px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #444;
  font-family: 'RobotoSlab-Medium';
`;

export const Footer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 20px;
  margin-top: auto;
  background-color: #fc3838;
  height: 50px;
`;

export const AmountCart = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  margin: 0px 5px;
`;

export const TotalPriceCart = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  margin-left: auto;
`;
