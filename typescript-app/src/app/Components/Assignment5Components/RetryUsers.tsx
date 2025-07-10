// app/users/RetryUsers.jsx
'use client';

import { useState } from 'react';

interface User{
  id: number,
  name: string,
  email: string,
}



export default function RetryUsers({ users = [], error = false }: { users?: User[]; error?: boolean }) {
  const [userData, setUserData] = useState(users);
  const [hasError, setHasError] = useState(error);
  const [loading, setLoading] = useState(false);

  const retryFetch = async () => {
    setLoading(true);
    setHasError(false);
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!res.ok) throw new Error('Retry failed');
      const data = await res.json();
      setUserData(data);
    } catch (err) {
      setHasError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ padding: 30 }}>
      <h1>Users</h1>

      {loading && <p> Loading...</p>}

      {hasError ? (
        <>
          <p style={{ color: 'red' }}> Error fetching users. Please click the button below to refresh the list.</p>
          <button onClick={retryFetch} disabled={loading}>
            Refresh
          </button>
        </>
      ) : (
        <>
          <ul>
            {userData.map((user) => (
              <li key={user.id} style={{ marginBottom: 10 }}>
                <strong>{user.name}</strong> — {user.email}
              </li>
            ))}
          </ul>

          
          <button onClick={retryFetch} style={{ marginTop: '1rem' }} disabled={loading}>
            Refresh List
          </button>
        </>
      )}
    </main>
  );
}
