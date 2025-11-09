import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Santhosh Babu — Portfolio',
  description: 'Santhosh Babu — Aspiring Full Stack Developer',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="layout-body">
        <div className="layout-container">
          {children}
        </div>
      </body>
    </html>
  );
}
