import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ember & Bean',
  description: 'A refined artisan coffee e-commerce store featuring database-driven coffee products, customer ordering, and order history. Customers can browse coffees by category, review product details, purchase items, and track previous orders.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#211A17', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
