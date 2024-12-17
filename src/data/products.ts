import { usdToInr } from '../utils/currency';

export const products = [
  {
    id: '1',
    name: 'Classic Oxford Shirt',
    description: 'Timeless cotton Oxford shirt perfect for any occasion',
    price: usdToInr(89.99),
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf',
    category: 'shirts',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '2',
    name: 'Slim-Fit Chino Pants',
    description: 'Modern fit chinos in premium cotton twill',
    price: usdToInr(79.99),
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80',
    category: 'pants',
    sizes: ['30x30', '32x32', '34x34', '36x34'],
  },
  {
    id: '3',
    name: 'Wool Blend Blazer',
    description: 'Sophisticated blazer for the modern gentleman',
    price: usdToInr(299.99),
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf',
    category: 'jackets',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '4',
    name: 'Merino Wool Sweater',
    description: 'Luxuriously soft merino wool sweater',
    price: usdToInr(129.99),
    image: 'https://images.unsplash.com/photo-1621072156002-e2fccdc0b176',
    category: 'sweaters',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '5',
    name: 'Italian Leather Belt',
    description: 'Hand-crafted leather belt with brushed steel buckle',
    price: usdToInr(89.99),
    image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc',
    category: 'accessories',
    sizes: ['32', '34', '36', '38', '40'],
  },
];