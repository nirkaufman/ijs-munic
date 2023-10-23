import {ReactNode} from "react";

interface OwnProps {
  children: ReactNode
}

export default function RootLayout({children}: OwnProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
