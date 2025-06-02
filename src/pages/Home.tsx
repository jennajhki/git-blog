import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';

interface JournalEntry {
  id: number;
  title: string;
  content: string;
}

const Journal = () => {
  const [entries, setEntries] = useState<JournalEntry[]>([]);

  useEffect(() => {
    fetch('/api/journal')
      .then((res) => res.json())
      .then((data) => setEntries(data));
  }, []);

  return (
    <div>
      <Sidebar />
      <section style={{ marginTop: '56px', padding: '2rem' }}>
        <h1>Journal Entries</h1>
        {entries.map((entry) => (
          <article key={entry.id}>
            <h2>{entry.title}</h2>
            <p>{entry.content}</p>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Journal;