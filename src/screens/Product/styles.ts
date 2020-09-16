import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
export const Container = styled.ScrollView`
  display: flex;
  flex: 1;
  background-color: #fff;
`;

export const Item = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Title = styled.Text`
  font-size: 16px;
  color: #333;
  font-weight: bold;
`;
export const Description = styled.Text`
  font-size: 14px;
  color: #999;
  font-weight: 400;
`;
export const Price = styled.Text`
  font-size: 16px;
  color: #e40909;
  font-weight: bold;
`;
export const Label = styled.Text`
  font-size: 12px;
  color: #ccc;
  margin-left: 10px;
`;
export const LabelComment = styled.Text`
  font-size: 12px;
  color: #333;
  font-weight: bold;
  margin: 5px 0px;
`;
export const Information = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px 10px;
`;
export const Comments = styled.View`
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
  margin: 0px 0px 20px 0px;
`;

export const ProductButtonContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background: #fff;
  border-color: #ff6666;
  border-width: ${StyleSheet.hairlineWidth}px;
  padding: 5px;
  margin: 2px 0px;
  border-radius: 2px;
  height: 40px;
`;
export const ProductButtonBuy = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background: #ff6666;
  height: 40px;
  padding: 5px;
  margin: 20px 0px 2px 0px;
  border-radius: 2px;
`;
export const ProductButtonLabel = styled.Text`
  color: #ff6666;
  font-weight: bold;
  text-align: center;
`;

export const ProductButtonLabelBuy = styled.Text`
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

export const ProductButtonRemove = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background: #fff;
  padding: 5px;
  height: 40px;
  margin: 2px 0px;
`;
export const ProductRemoveLabel = styled.Text`
  color: #000;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
`;
export const CustomerContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 4px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: #ccc;
`;
export const CustomerName = styled.Text`
  margin: 2px;
`;
export const CustomerOpinion = styled.Text`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 14px;
  color: #999;
  font-weight: 300;
`;
