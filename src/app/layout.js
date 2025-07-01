import {Outfit, Ovo} from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: [ "400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], 
  weight: ["400"],
});

export const metadata = {
  title: "Portfolio-Yash_Lekhwani",
  description: "My personal portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
     className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden min-h-screen bg-white dark:bg-darkTheme dark:text-white transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}
