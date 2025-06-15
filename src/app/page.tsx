export const metadata = {
  title: `Henry's React App`,
  description: `My first clean React page`,
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to My React App</h1>
      <p className="text-lg text-gray-600">{`You're now building with Next.js + React + Tailwind!`}</p>    </main>
  );
}
