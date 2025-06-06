export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  colors: string[];
  category: 'tumbler' |'gift-set' | 'jar';

  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  color: string;
  customText?: string;
}