import { getSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ProtectedPage() {
  const router = useRouter();

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      if (!session) {
        router.push('/api/auth/signin');
      }
    };
    securePage();
  }, []);

  return (
    <div>
      <h1>Protected Page</h1>
      <p>You are authenticated!</p>
    </div>
  );
}
