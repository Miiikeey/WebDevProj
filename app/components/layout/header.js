import Link from 'next/link';

export default function Header() {
  return (
    <header className = "flex items-center justify-between">
        <Link className='text-black font-semibold text-2xl' href="/">Catering Services</Link>
        <nav className = "flex items-center gap-4 text-black font-semibold">
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/booking">Booking</Link>
          <Link href="/aboutus">About Us</Link>
        </nav>
      </header>
  );
}