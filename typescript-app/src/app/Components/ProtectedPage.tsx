export default function ProtectedComponent() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Protected Page</h1>
      <p>Only authenticated users can see this content.</p>
    </div>
  );
}
