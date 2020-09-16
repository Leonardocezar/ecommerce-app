import styled from 'styled-components/native';
import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');
const height = width * 0.6;
export const Container = styled.View`
  background-color: #fff;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: ${width}px;
  height: ${height};
`;
