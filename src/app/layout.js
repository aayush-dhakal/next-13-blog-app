import Navbar from "@/components/navbar/Navbar"; // here @ allows us to import from the root of the project(which is src)
import "./globals.css";
import { Inter, Roboto } from "next/font/google"; // next js by default uses google fonts
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] }); // we don't have to go in google fonts website and copy the link of it to use in your project just import it like this and use as className
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

// static metadata. This is only available in serve side rendering
export const metadata = {
  // for SEO
  title: "Blog App",
  description: "This app is a personal blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body className={roboto.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
