import Image from "next/image";

const Page = () => {
    return(
        <Image 
            src={"https://www.google.com.br/logos/google.jpg"} 
            width={500}
            height={500}
            alt="Google Image"
            quality={100}       
        />
    )
}

export default Page;