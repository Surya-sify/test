'layout.tsx'
import Link from "next/link";
import TaskPage from "./task/page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;

}) {
  
  return (
  
  <html lang="en">
  
      <head>
  
        <title>My App</title>
  
      </head>
  
      <body>
        <header>
  
          <h1>My first app</h1>
  
          <Link href={'/task'}>task</Link>
          <Link href={'/list'}>taskList</Link>
  
        </header>
  
        <div className="bg-red-200">
          {children}
        </div>
      </body>
    </html>
  );
}