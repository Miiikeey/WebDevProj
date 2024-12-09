import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import Menu from '../menu/menu';

export default function Page() {
  return (
    <main className="bg-white min-h-screen">
      <Header />
      <Menu />
      <Footer />
    </main>
  );
}