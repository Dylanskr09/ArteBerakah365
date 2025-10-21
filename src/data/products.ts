import type { Product } from '@/types'

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Camiseta “Propósito Eterno”',
    sku: 'AB365-TEE-001',
    price: 52000,
    collectionId: 'c1',
    image: '/mock/tee-purpose.jpg',
    short: '100% algodón, estampado eco-friendly',
    tags: ['algodon', 'unisex']
  },
  {
    id: 'p2',
    name: 'Mug “Semillas de Mostaza”',
    sku: 'AB365-MUG-003',
    price: 28000,
    collectionId: 'c2',
    image: '/mock/mug-seeds.jpg',
    short: 'Apto microondas y lavavajillas',
    tags: ['ceramica']
  },
  {
    id: 'p3',
    name: 'Termo “Fuerza y Fe”',
    sku: 'AB365-TRM-004',
    price: 65000,
    collectionId: 'c1',
    image: '/mock/bottle-faith.jpg',
    short: 'Acero inoxidable 600ml',
    tags: ['acero','premium']
  }
]
