import Script from 'next/script';
import "bootstrap/dist/css/bootstrap.css";

import './globals.css'
export const metadata = {
  title: "STUDIO",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className="" >{children}
  <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></Script>
      </body>

    </html>
  );
}


// style={{backgroundColor: "#eb4f34"}}