import Link from 'next/link';
import Header from '../app/components/layout/header';
import Hero from '../app/components/layout/hero';
import Footer from '../app/components/layout/footer';

export default function Page() {

  return (
    <main>
      <Header />
      <Hero />
      <Footer />
    </main>
  );
}