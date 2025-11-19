import productImages from '../assets/product_image';

// Map product images from the productImages array
const products = [
  {
    id: '1',
    name: 'Volt Xtreme',
    short: 'High-caffeine performance drink',
    price: '$2.99',
    description:
      'Volt Xtreme delivers a focused burst of energy with B-vitamins and taurine. Best before workouts or late shifts.',
    images: [productImages[0]],
  },
  {
    id: '2',
    name: 'Neon Rush',
    short: 'Citrus + guarana boost',
    price: '$3.49',
    description:
      'Neon Rush combines citrus flavor with natural guarana for a sustained release of energy.',
    images: [productImages[1]],
  },
  {
    id: '3',
    name: 'Midnight Charge',
    short: 'Zero sugar, max flavor',
    price: '$3.19',
    description:
      'Midnight Charge keeps you sharp without the sugar crash. Smooth cola-like notes and long-lasting lift.',
    images: [productImages[2]],
  },
  {
    id: '4',
    name: 'Herbal Surge',
    short: 'Botanical energy with green tea extract',
    price: '$3.79',
    description:
      'Herbal Surge uses green tea and natural extracts for a gentler uplift and antioxidant support.',
    images: [productImages[3]],
  },
];

export default products;
