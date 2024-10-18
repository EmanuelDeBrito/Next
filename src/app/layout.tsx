import { ReactNode } from "react";
import "./globals.css";

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return(
    <html lang="pt-br">
      <body>
        <h1 className="mb-3">Brincando com o Next</h1>
        {children}
      </body>
    </html>
  )
}

export default Layout