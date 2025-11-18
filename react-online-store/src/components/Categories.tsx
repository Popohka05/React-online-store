import { Category } from '../types';

export default function Categories({ categories }: { categories: Category[] }) {
  const topCategories = categories
    .filter(c => c.Category_Image || (c.category_images && c.category_images[0]?.url))
    .slice(0, 8);

  if (!topCategories.length) return null;

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
      gap: '16px',
      padding: '20px 10px',
      background: '#fff',
      borderRadius: '16px',
      margin: '20px auto',
      maxWidth: '1400px'
    }}>
      {topCategories.map(cat => {
        const img = cat.Category_Image || cat.category_images?.[0]?.url || '';
        return (
          <div key={cat.Category_ID} style={{ textAlign: 'center', cursor: 'pointer' }}>
            <div style={{
              width: '100%',
              height: '120px',
              background: '#f0f0f0',
              borderRadius: '12px',
              backgroundImage: img ? `url(${img})` : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              marginBottom: '8px'
            }} />
            <p style={{ fontSize: '14px', color: '#333' }}>{cat.Category_Name}</p>
          </div>
        );
      })}
    </div>
  );
}