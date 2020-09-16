import React, {useMemo} from 'react';
import {Container, Footer, AmountCart, TotalPriceCart} from './styles';
import {useAuth} from '../../contexts/auth';
import Header from '../../components/Container/Header';
import CartProduct from '../../components/List/CartProduct';
import Products from '../../utils/data';
import {FlatList} from 'react-native';
import {useCart} from '../../contexts/cart';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {formatValue} from '../../utils/format';
const Cart: React.FC = () => {
  const {signOut, user} = useAuth();
  const {
    products,
    increment,
    decrement,
    totalItensInCart,
    cartTotal,
  } = useCart();

  return (
    <>
      <Header title="Meu Carrinho" />
      <Container>
        <FlatList
          data={products}
          renderItem={({item}) => (
            <CartProduct
              id={item.id}
              image={item.avatar}
              title={item.name}
              price={item.price}
              amount={item.quantity}
            />
          )}
          keyExtractor={(item) => String(item.id)}
        />
      </Container>
      <Footer>
        <Icon name="shopping-cart" color="#fff" size={24} />
        <AmountCart>
          {totalItensInCart
            ? totalItensInCart > 1
              ? `${totalItensInCart} items`
              : `${totalItensInCart} item`
            : 'Carrinho Vazio'}
        </AmountCart>
        <TotalPriceCart> Total: {formatValue(cartTotal)}</TotalPriceCart>
      </Footer>
    </>
  );
};

export default Cart;
