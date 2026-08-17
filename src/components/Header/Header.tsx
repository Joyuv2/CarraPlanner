import { ReactNode } from "react";

export default function Header({children}: {children: ReactNode}) {
    return (
        <div className="bg-background-2 h-[6em] w-full border-foreground-1 z-20 border-b-1 flex flex-row items-center pl-2">
            {children}
        </div>
    )
}