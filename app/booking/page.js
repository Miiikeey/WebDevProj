import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import Booking from '../booking/calendar';

export default function Page() {
  return (
    <main className="bg-white min-h-screen">
      <Header />
      <Booking />
      <Footer />
    </main>
  );
}