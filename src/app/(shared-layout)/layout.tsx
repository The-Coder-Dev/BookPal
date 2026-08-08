import Navbar from "@/components/web/Navbar";
import { ReactNode } from "react";

interface Props {
    children: ReactNode
}


export default function HomeLayout({children} : Props) {
    return (
        <main>
            <Navbar />
            {children}
        </main>
    )
}