// 2. Extend your Next.js component that fetches data from a public API ( https ://jsonplaceholder.typicode.com/users) 
// using server-side rendering (SSR) with the App Router to handle errors gracefully.
//  If the fetch request fails during SSR, display a user-friendly error message on the page. 
// Additionally, provide a retry button so users can attempt to fetch the data again without reloading the entire page.

import RetryUsers from "@/app/Components/Assignment5Components/RetryUsers";


export default async function UsersPage() {
  let users = [];
  let error = false;

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
      cache: 'no-store', 
    });
    if (!res.ok) throw new Error('Failed to fetch');
    users = await res.json();
  } catch (err) {
    error = true;
  }

  return <RetryUsers users={users} error={error} />;
}
