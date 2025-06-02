import { useState } from 'react';
import React from 'react';
import styles from './Discussion.module.css';

interface Comment {
  id: number;
  user: string;
  message: string;
}

const Discussion = () => {
  const [discussions, setDiscussions] = useState<Comment[]>([
    { id: 1, user: 'Yuna', message: '와 블로그 너무 예뻐요!' },
    { id: 2, user: 'Jen', message: '글 잘 보고 갑니다 :)' },
  ]);

  const [user, setUser] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newComment: Comment = {
      id: discussions.length + 1,
      user: user.trim() || '익명',
      message: message.trim(),
    };

    setDiscussions([...discussions, newComment]);
    setUser('');
    setMessage('');
  };

  return (
    <section className={styles.section}>
      <h2>Share your thoughts, questions, or feedback here!💬</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Your Name"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Type Your Message Here!"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Submit</button>
      </form>
      {discussions.map((comment) => (
        <div key={comment.id} className={styles.comment}>
          <strong>{comment.user}</strong>
          <p>{comment.message}</p>
        </div>
      ))}
    </section>
  );
};

export default Discussion;
