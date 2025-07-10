// 6. Modify your previous Next.js Server Component that fetches data with Axios to include error
//  handling. If the request fails, display an error message and provide a retry button so the user
//  can attempt fetching the data again. Implement the retry logic in a Client Component to handle 
// user interaction.

// app/page.jsx
import axios from "axios";
import UserList from "./UserList";

export default async function HomePage() {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return <UserList initialUsers={res.data} />;
  } catch (err) {
    return <UserList error="Failed to fetch data." />;
  }
}
