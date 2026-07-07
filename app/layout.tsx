import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = { title: 'Burger Man', description: 'fast food • manhattan • 3.9 rating • 757 Google reviews • 740 7th Ave, New York, NY 10019, USA' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
