import { Syne } from 'next/font/google';
import Navbar from "./navbar";
import Footer from "./footer";


export const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

// export const metadata = {
//   title: 'Carina Arnold | Portfolio',
//   description: 'Webdev | Online-Marketing | E-Commerce',
//   colorScheme: "dark",
// }

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={`${syne.className} bg-zinc-900 text-zinc-100`}>
        <Navbar />
        <main>
        {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
