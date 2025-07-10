// 4.Enhance the previous application by adding protected pages that require authentication.
// Create a login page with a form that accepts a username and password.
// Implement authentication logic (e.g., hardcode a username and password for now).
// Secure the About page so that it can only be accessed by authenticated users.
// Redirect unauthenticated users to the login page.
// Display a message on the Home page welcoming the authenticated user.

"use client";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { Authcontext } from "../../../../../Context/Authcontext";

export default function LoginPage() {
    const {isloggedIn, setIsloggedIn}=useContext(Authcontext);
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  function handleLogin(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (username === "Yash" && password === "1234") {
      localStorage.setItem("user", JSON.stringify({ username }));
      setIsloggedIn(true);
      router.push("/Assignment-3/Question3/Home");
      
    } else {
      setMsg("Invalid Details"); 
    }
  }

  return (
    <main style={{ padding: 30 }}>
      <h1> Login</h1>
      <form onSubmit={handleLogin}> 
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <p style={{ color: "red" }}>{msg}</p>
    </main>
  );
}
