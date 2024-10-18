import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

const Layout = ({ children }: Props) => {
    return(
        <div>
            <h1 className="mb-3 text-lg">AUTENTICAÇÃO</h1>

            <div>
                {children}
            </div>
        </div>
    )
}

export default Layout;