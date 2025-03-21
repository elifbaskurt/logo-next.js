import "./globals.css";
import Navbar from "@/components/navbar/navbar"
import Footer from "@/components/footer/footer"


// DEĞİŞMEYEN KISIMLAR 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
