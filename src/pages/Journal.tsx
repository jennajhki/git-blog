import { useState } from 'react';
import Sidebar from '../components/Sidebar';

const Journal = () => {
  const [journalEntries] = useState([
    { id: 1, date: '2025-06-02', content: '오늘은 git 블로그를 꾸며봤다. 보라색 테마가 마음에 든다.' },
    { id: 2, date: '2025-05-30', content: '리액트와 타입스크립트를 함께 쓰는 게 처음에는 어렵지만 점점 익숙해지고 있다.' },
  ]);

  return (
    <div>
      <Sidebar />
      <section style={{ marginTop: '56px', padding: '2rem' }}>
        <h2>📓 Journal</h2>
        {journalEntries.map((entry) => (
          <div key={entry.id} style={{ marginBottom: '1rem' }}>
            <strong>{entry.date}</strong>
            <p>{entry.content}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Journal;
