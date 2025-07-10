'use client';

import withAuth from "@/app/Assignment-5/Question14/withAuth";



function ProtectedPage() {
  
  
  return (
    <div style={{ padding: 40 }}>
      <h1>Protected Page</h1>
      <p>This content is visible only if loggin</p>
    </div>
  );
}

export default withAuth(ProtectedPage);