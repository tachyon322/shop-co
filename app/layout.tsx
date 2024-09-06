import Header from "@/components/header/header";
import './globals.css'
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
    <html>
      <body>
        <div className="wide-wrap"></div>
        {children}
      </body>
    </html>
    </SessionProvider>
  );
}