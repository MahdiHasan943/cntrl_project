import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "CNTRL",
  description: "TAKE FULL CNTRL OF YOUR AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        {/* header */}
        <Header />
        {/* main content */}
        {children}
        {/* footer */}
        <Footer />
      </body>
    </html>
  );
}
