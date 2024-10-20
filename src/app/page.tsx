import { Metadata } from "next";
import Link from "next/link";

const metadata: Metadata = {
  title: 'Homepage'
}

const Page = () => {
  return(
    <div>
      <h1>Página Inicial</h1>

      <Link href={'/sobre'}>Ir para página sobre</Link>
    </div>
  )
}

export default Page;