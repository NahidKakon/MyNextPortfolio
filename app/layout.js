import Navbar from "./components/Navbar";
import "./globals.css";
import {Inter} from "next/font/google"


const inter = Inter({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
});

export const metadata = {
  title: "portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}

// import localFont from "next/font/local";
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });