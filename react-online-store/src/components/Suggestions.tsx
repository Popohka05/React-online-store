export default function Suggestions({ words, onClick }: { words: string[]; onClick: (w: string) => void }) {
  if (!words.length) return null;
  return (
    <div style={{ textAlign: 'center', marginBottom: '30px' }}>
      <strong style={{ color: '#555' }}>Часто ищут: </strong>
      {words.map((w) => (
        <span
          key={w}
          onClick={() => onClick(w)}
          style={{
            background: '#f0f0f0',
            padding: '8px 16px',
            margin: '5px',
            borderRadius: '30px',
            cursor: 'pointer',
            display: 'inline-block',
          }}
        >
          {w}
        </span>
      ))}
    </div>
  );
}