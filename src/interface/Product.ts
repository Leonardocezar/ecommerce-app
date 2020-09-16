interface Comment {
  id: number;
  name: string;
  comment: string;
}
interface Caroulsel {
  id: number;
  url: string;
}

interface ProductInterface {
  id: number;
  name: string;
  price: number;
  avatar: string;
  description: string;
  carousel: Caroulsel[];
  discount: number | 0.0;
  rating: Array<number>;
  comment: Comment[];
}

export default ProductInterface;
