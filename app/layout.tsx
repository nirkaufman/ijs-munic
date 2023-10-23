import {ReactNode} from "react";

interface OwnProps {
  children: ReactNode
}

export default function RootLayout({children}: OwnProps) {
  return (
    <html lang="en">
      <body>
      <h1>Root Layout Title</h1>
      {children}
      </body>
    </html>
  )
}
