import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/utilities/Navbar";

const montserrat = Montserrat({
  subsets : ["latin"],
  variable : "--font-Montserrat",
  weight :"400"
})

export const metadata = {
  title: "Kebudayaan",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`$(Montserrat.variable)`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
