import {ReactNode} from "react";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
      <div>
        <h2>Admin section layout</h2>
        {children}
      </div>
  )
}
