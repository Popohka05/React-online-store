import ProductCard from './ProductCard';
import { Product } from '../types';

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
      gap: '24px',
      padding: '0 15px',
    }}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}