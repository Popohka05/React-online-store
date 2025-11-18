export default function SearchBar({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div style={{ textAlign: 'center', margin: '32px 0' }}>
      <input
        type="text"
        placeholder="Поиск товаров..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: '90%',
          maxWidth: '800px',
          padding: '18px 24px',
          fontSize: '18px',
          borderRadius: '16px',
          border: 'none',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          outline: 'none',
        }}
      />
    </div>
  );
}