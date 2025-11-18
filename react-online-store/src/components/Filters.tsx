export default function Filters({
  minPrice, setMinPrice,
  maxPrice, setMaxPrice,
  minRating, setMinRating
}: {
  minPrice: string; setMinPrice: (v: string) => void;
  maxPrice: string; setMaxPrice: (v: string) => void;
  minRating: number; setMinRating: (v: number) => void;
}) {
  return (
    <div style={{ textAlign: 'center', margin: '20px 0', padding: '16px', background: '#fff', borderRadius: '16px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
      <strong>Фильтры: </strong>
      <span style={{ margin: '0 10px' }}>
        от <input type="number" value={minPrice} onChange={e => setMinPrice(e.target.value)} style={{ width: '90px', padding: '8px', margin: '0 8px' }} /> ₽
      </span>
      <span style={{ margin: '0 10px' }}>
        до <input type="number" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} style={{ width: '90px', padding: '8px', margin: '0 8px' }} /> ₽
      </span>
      <span style={{ marginLeft: '20px' }}>
        Рейтинг: 
        <select value={minRating} onChange={e => setMinRating(+e.target.value)} style={{ marginLeft: '8px', padding: '8px', borderRadius: '8px' }}>
          <option value={0}>Любой</option>
          <option value={4}>4+</option>
          <option value={4.5}>4.5+</option>
        </select>
      </span>
    </div>
  );
}