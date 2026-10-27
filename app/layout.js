import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "700"],
  style: ["normal", "italic"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: 'TruVet Pet Care Clinic | Sector 79, Gurugram',
  description: 'Veterinary clinic for dogs and cats in Sector 79, Gurugram. Open all 7 days, 10am to 8pm.',
  icons: { icon: '/favicon.png', apple: '/apple-touch-icon.png' },
  metadataBase: new URL('https://truvet.in'),
  openGraph: {
    siteName: 'TruVet Pet Care Clinic',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'TruVet Pet Care Clinic, Sector 79, Gurugram' }],
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900 font-outfit">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
      <script
        src="https://koko.vet/widgets/booking/v1/chatbot.js"
            koko-clinic-id="dHJ1dmV0"
                async
                  ></script>
        </body>
    </html>
  );
}
