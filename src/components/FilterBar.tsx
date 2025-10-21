import { collections } from '../data/collections'

export default function FilterBar({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="filterbar">
      <button onClick={() => onChange('all')} className={`badge ${value==='all' ? 'active' : ''}`}>Todas</button>
      {collections.map((c) => (
        <button key={c.id} onClick={() => onChange(c.id)} className={`badge ${value===c.id ? 'active' : ''}`}>
          {c.name}
        </button>
      ))}
    </div>
  )
}
