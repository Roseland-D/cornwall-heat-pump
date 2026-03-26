import "./globals.css";

export const metadata = {
  title: "Cornwall Heat Pump Services",
  description: "Heat pump servicing and maintenance in Cornwall",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}