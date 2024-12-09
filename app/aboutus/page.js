import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import AboutUs from '../aboutus/aboutus';

export default function Page() {
  return (
    <main className="bg-white min-h-screen">
      <Header />
      <AboutUs />
      <Footer />
    </main>
  );
}