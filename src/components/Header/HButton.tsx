import { ReactNode } from "react";
import { Faculty_Glyphic } from "next/font/google";

const FacultyGlyphic = Faculty_Glyphic({
  subsets: ["latin"],
  weight: "400",
});

export default function HButton({children}: {children: ReactNode}) {
    return(
        <div className={`${FacultyGlyphic.className} text-4xl p-2 h-3/6 duration-80`}>{children}</div>
    )
}