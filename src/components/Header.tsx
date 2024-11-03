import { Children, ReactNode } from "react";


type HeaderProps = {
    image: {
        src: string;
        alt: string;
    }

    children: ReactNode
}

export default function Header({image, children}: HeaderProps) {
    return (    
        <>
            <header>
                {/* react shortcut take all key value pairs and spread them as props
                    as key value pairs  */}
                <img {...image} />
                {children}
            </header>
        </>
    )   
}