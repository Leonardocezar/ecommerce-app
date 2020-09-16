import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import ProductInterface from '../../interface/Product';
import {
  Container,
  Item,
  Title,
  Label,
  Description,
  Price,
  Information,
  ProductButtonContainer,
  ProductButtonBuy,
  ProductButtonLabel,
  ProductButtonLabelBuy,
  ProductButtonRemove,
  Comments,
  LabelComment,
  ProductRemoveLabel,
  CustomerContainer,
  CustomerName,
  CustomerOpinion,
} from './styles';
import Products from '../../utils/data';
import {useNavigation, useRoute} from '@react-navigation/native';
import Carousel from '../../components/Carousel';
import {AirbnbRating} from 'react-native-ratings';
import {formatValue} from '../../utils/format';
import {useCart} from '../../contexts/cart';
import Icons from 'react-native-vector-icons/MaterialIcons';
interface Params {
  id: number;
}
const Product: React.FC = () => {
  const [product, setProduct] = useState<ProductInterface[]>([]);
  const [itemLoadingAction, setItemLoadingAction] = useState<boolean>(false);
  const navigation = useNavigation();
  const [loading, setLoading] = useState<boolean>(true);
  const route = useRoute();
  const routeParams = route.params as Params;
  const {addToCart, removeFromCart, products} = useCart();
  const amountRating = product[0]?.rating.length;
  var sumRating = product[0]?.rating.reduce(
    (rating, number) => rating + number,
    0,
  );
  const ratingValue = sumRating / amountRating;
  useEffect(() => {
    async function loadProduct(id: number) {
      const item = await Products.filter((prod) => {
        return prod.id === id;
      });
      setProduct(item);
    }
    loadProduct(routeParams.id);
  }, []);

  async function handleAddToCart(item: ProductInterface): Promise<void> {
    setItemLoadingAction(true);
    await addToCart(item);
    setItemLoadingAction(false);
  }

  async function handleBuyToCart(item: ProductInterface) {
    setItemLoadingAction(true);
    await addToCart(item);
    setItemLoadingAction(false);
    navigation.navigate('Carrinho');
  }
  function handleRemoveFromCart(id: number): void {
    setItemLoadingAction(true);
    removeFromCart(id);
    setItemLoadingAction(false);
  }

  const productExists = products.find((p) => p.id === product[0]?.id);
  return (
    <Container>
      <Carousel carousel={product[0]?.carousel} />
      <Information>
        <Title>{product[0]?.name}</Title>
        <Item>
          <AirbnbRating
            showRating={false}
            count={5}
            defaultRating={ratingValue}
            size={14}
            isDisabled={true}
          />
          <Label> Baseado em {amountRating} avaliações</Label>
        </Item>
        <Description>{product[0]?.description}</Description>
        <Price>{formatValue(product[0]?.price)}</Price>

        <ProductButtonBuy onPress={() => handleBuyToCart(product[0])}>
          <ProductButtonLabelBuy>Comprar Agora</ProductButtonLabelBuy>
        </ProductButtonBuy>
        <ProductButtonContainer onPress={() => handleAddToCart(product[0])}>
          <ProductButtonLabel>Adicionar ao Carrinho</ProductButtonLabel>
        </ProductButtonContainer>
        {productExists ? (
          <ProductButtonRemove
            onPress={() => handleRemoveFromCart(product[0]?.id)}>
            <ProductRemoveLabel>Remover do Carrinho</ProductRemoveLabel>
          </ProductButtonRemove>
        ) : null}
      </Information>
      <Comments>
        <LabelComment>Opinião dos Clientes</LabelComment>
        {product[0]?.comment.map((item) => {
          return (
            <CustomerContainer key={item.id}>
              <Icons name="person" size={24} color="#000" />
              <CustomerName>{item.name} - </CustomerName>
              <CustomerOpinion>{item.comment}</CustomerOpinion>
            </CustomerContainer>
          );
        })}
      </Comments>
    </Container>
  );
};

export default Product;
