import { Product } from '../types';

export default function ProductCard({ product }: { product: Product }) {
  const imageUrl =
    product.images?.[0]?.Image_URL ||
    product.images?.[0]?.image_url ||
    'https://via.placeholder.com/300';

  return (
    <div
      style={{
        background: '#fff',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        position: 'relative',
      }}
    >
      <div style={{ position: 'relative' }}>
        {product.marks?.map((mark, i) => (
          <span
            key={i}
            style={{
              position: 'absolute',
              top: 8 + i * 30,
              left: 8,
              background: mark.color_code,
              color: '#fff',
              padding: '4px 10px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: 'bold',
              zIndex: 10,
            }}
          >
            {mark.Mark_Name.toUpperCase()}
          </span>
        ))}
        <img
          src={imageUrl}
          alt={product.name}
          style={{ width: '100%', height: '220px', objectFit: 'cover' }}
        />
      </div>

      <div style={{ padding: '16px' }}>
        <h3
          style={{
            fontSize: '15px',
            marginBottom: '8px',
            height: '44px',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {product.name}
        </h3>
        <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#e74c3c' }}>
          {product.price.toLocaleString()} ₽
          {product.old_price && (
            <span
              style={{
                textDecoration: 'line-through',
                color: '#999',
                marginLeft: '8px',
                fontSize: '16px',
              }}
            >
              {product.old_price.toLocaleString()} ₽
            </span>
          )}
        </div>
      </div>
    </div>
  );
}