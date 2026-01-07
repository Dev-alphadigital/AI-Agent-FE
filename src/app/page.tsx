import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <main className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">AI Agent</h1>
        <p className="mt-4 text-lg text-gray-600">Welcome to your AI Agent application</p>
        <div className="mt-8">
          <Link href="/signup">
            <Button variant="primary">Get Started</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}