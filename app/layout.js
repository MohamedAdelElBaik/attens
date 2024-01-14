import './globals.css';

export const metadata = {
  title: 'Attens',
  description: 'App to take attendance for employees',
  icons: {
    icon: '/icon.png', // /public path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
