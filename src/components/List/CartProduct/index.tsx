import React, {useMemo} from 'react';
import {
  Product,
  ProductImageContainer,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductTotal,
  ProductInformation,
  ProductActions,
  ProductControlButton,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {useCart} from '../../../contexts/cart';
import {formatValue} from '../../../utils/format';
interface Props {
  id: number;
  image: string;
  title: string;
  price: number;
  amount: number;
}

const CartProduct: React.FC<Props> = (props) => {
  const {increment, decrement, products} = useCart();

  function handleIncrement(id: number): void {
    increment(id);
  }

  function handleDecrement(id: number): void {
    decrement(id);
  }
  return (
    <Product>
      <ProductImageContainer>
        <ProductImage source={{uri: props.image}} />
      </ProductImageContainer>
      <ProductInformation>
        <ProductName>{props.title}</ProductName>
        <ProductPrice>{props.price}</ProductPrice>
        <ProductPrice>
          {props.amount > 1
            ? `${props.amount} unidades`
            : `${props.amount} unidade`}
        </ProductPrice>
        <ProductTotal>{formatValue(props.amount * props.price)}</ProductTotal>
      </ProductInformation>
      <ProductActions>
        <ProductControlButton onPress={() => handleIncrement(props.id)}>
          <Icon name="add" color="#000" size={24} />
        </ProductControlButton>
        <ProductControlButton onPress={() => handleDecrement(props.id)}>
          <Icon name="remove" color="#000" size={24} />
        </ProductControlButton>
      </ProductActions>
    </Product>
  );
};

export default CartProduct;
