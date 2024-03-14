import 'bootstrap/dist/css/bootstrap.css';
import './globals.css'
export const metadata = {
  title: "STUDIO",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className="" style={{backgroundColor: "#eb4f34"}}>{children}</body>
  

    </html>
  );
}


// style={{backgroundColor: "#eb4f34"}}