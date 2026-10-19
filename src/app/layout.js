import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  // Replace with the actual production URL to resolve relative image paths
  metadataBase: new URL('https://omadiction.pro'), 
  
  title: {
    default: "Oma Services | Digital Agency & Professional Diction",
    template: "%s | Oma Services", // If a page exports title "Web Design", tab shows "Web Design | Oma Services"
  },
  description: "Elevate your brand with Oma Services. We specialize in professional diction training, premium website design, mobile application engineering, and custom web apps.",
  keywords: [
    "Oma Services", 
    "Professional Diction Training", 
    "Website Design Agency", 
    "Mobile App Engineering", 
    "Web Application Development",
    "Elocution Training",
    "Software Agency"
  ],
  authors: [{ name: "Oma Services" }],
  creator: "Oma Services",
  
  // Open Graph for rich previews on WhatsApp, LinkedIn, Facebook
  openGraph: {
    type: "website",
    locale: "en_NG", // Assuming target audience is primarily Nigeria based on context
    url: "https://omadiction.pro",
    title: "Oma Services | Digital Agency & Professional Diction",
    description: "Expert diction coaching combined with top-tier digital product engineering.",
    siteName: "Oma Services",
    images: [
      {
        url: "/og-image.jpg", // Add a 1200x630 banner image in your /public folder named og-image.jpg
        width: 1200,
        height: 630,
        alt: "Oma Services Banner",
      },
    ],
  },
  
  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Oma Services | Digital Agency & Professional Diction",
    description: "Professional diction training, website design, mobile app engineering, and web applications.",
    images: ["/og-image.jpg"],
  },
  
  // Tell Google and other search engines to index this site
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}