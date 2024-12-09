import { Roboto } from "next/font/google";
import "./globals.css";
import { AuthContextProvider } from '../app/components/utils/auth-context';

const roboto = Roboto({ subsets: ["latin"], weight: ['400', '500', '700'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AuthContextProvider>
          <main className="max-w-6xl mx-auto p-4">
            {children}
          </main>
        </AuthContextProvider>
      </body>
    </html>
  );
}