import Link from 'next/link';

export const metadata = {
  title: `Sooner`,
  description: `My first clean React page`,
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-animated-gradient bg-animated animate-gradient-x">
  <h1 className="heading-1 text-white">SOONER!</h1>
  <p className="paragraph text-white">
    Curious to learn more about your relationship with money?
  </p>

  <Link href="/learn">
    <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
      Learn More
    </button>
  </Link>
</main>
  );
}