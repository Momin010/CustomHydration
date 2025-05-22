import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'jar-frosted',
    name: 'Customized Glass Jar – Frosted',
    price: 13.95,
    description: 'A soft matte frosted jar, personalized with your name or message. Elegant, minimal, and uniquely yours.',
    images: [
      '/images/gl3.png',
      '/images/jar-frosted-2.png',
    ],
    colors: ['#F2F2F2', '#E8E8E8'],
    category: 'jar',
    featured: true
  },
  {
    id: '2',
    name: 'Gift Set - Marble',
    price: 19.97,
    description: 'Luxurious marble-themed gift set with our best mom design.',
    images: [
      '/images/gift set 2.png',
      '/images/gift set 2(plus).png',
    ],
    colors: ['#FFFFFF', '#F5F5F5', '#E6E6E6'],
    category: 'gift-set',
    featured: true,
  },
  {
    id: '3',
    name: 'Classic Black Tumbler',
    price: 34.99,
    description: 'Sleek black tumbler with customizable text and premium insulation.',
    images: [
      '/images/tumbler(blc).png',
    ],
    colors: ['#000000', '#333333'],
    category: 'tumbler',
  },
  {
    id: 'Floral Glass Jar',
    name: 'Floral Glass Jar',
    price: 13.95,
    description: 'A beautiful floral design on a clear glass jar, perfect for gifts or home decor.',
    images: [
      '/images/gift set 2.png',
      '/images/gift set 2(plus).png',
    ],
    colors: ['#FFFFFF', '#F5F5F5', '#E6E6E6'],
    category: 'gift-set',
    featured: true,
  },
  {
    id: '4',
    name: 'Rose Pink Tumbler',
    price: 34.99,
    description: 'Elegant rose pink tumbler with customizable text and premium insulation.',
    images: [
      '/images/tumbler(p).png',
    ],
    colors: ['#FFB6C1', '#FFC0CB'],
    category: 'tumbler',
  },
  {
    id: '5',
    name: 'Custom Text Tumbler - Blue',
    price: 39.99,
    description: 'Premium black tumbler with your personalized text in elegant script.',
    images: [
      '/images/tumbler(bl).png',
    ],
    colors: ['#000000', '#333333'],
    category: 'tumbler',
  },
  {
    id: '6',
    name: 'Custom Text Tumbler - White',
    price: 39.99,
    description: 'Premium white tumbler with your personalized text in elegant script.',
    images: [
      '/images/tumbler(w).png',
    ],
    colors: ['#FFFFFF', '#F5F5F5'],
    category: 'tumbler',
  },
  {
    id: 'jar-clear',
    name: 'Customized Glass Jar – Clear',
    price: 13.95,
    description: 'Crystal-clear custom glass jar to showcase your unique text with style. Great for gifts or display.',
    images: [
      '/images/gl3.png',
      '/images/gl2.png',
    ],
    colors: ['#ffffff', '#f5f5f5'],
    category: 'jar',
    featured: false
  }
];
