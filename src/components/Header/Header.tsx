import { ReactNode } from "react";

export default function Header({children}: {children: ReactNode}) {
    return (
        <div className="bg-background-2 rounded-b-xl h-[6em] w-full border-foreground-1 border-b-2 flex flex-row justify-around">
            {children}
        </div>
    )
}