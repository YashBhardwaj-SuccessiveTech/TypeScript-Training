'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// Type for props that any component will accept
interface WithAuthProps {
  [key: string]: any; // This allows any props to be passed to the wrapped component
}

// Higher-order component to wrap the given component
export default function withAuth<P extends WithAuthProps>(WrappedComponent: React.ComponentType<P>) {
  return function AuthComponent(props: P) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    const router = useRouter();

    // Effect to check for the token on mount
    useEffect(() => {
      const token = localStorage.getItem('token');
      setIsAuthenticated(!!token); // Set authentication status based on token
    }, []); // Only run this once on mount

    if (isAuthenticated === null) {
      return <p>Loading...</p>; // Loading state while checking authentication
    }

    if (!isAuthenticated) {
      router.push('/login'); // Optionally redirect to the login page
      return <p>You must be logged in to view this page.</p>;
    }

    // Return the wrapped component if authenticated
    return <WrappedComponent {...props} />;
  };
}
