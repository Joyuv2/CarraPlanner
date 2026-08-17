import styles from "@/app/index.module.css"
import Image from "next/image";
import { Sedgwick_Ave_Display } from "next/font/google";
import { Rock_Salt } from "next/font/google";

const SedgwickAveDisplay = Sedgwick_Ave_Display({
  weight: '400',
  subsets: ["latin"]
})

const RockSalt = Rock_Salt({
  weight: '400',
  subsets: ["latin"]
})

export default function Page() {
  return (
    <div className={`h-[45em] flex justify-center`}>
      <Image alt={"banda"} src={"/banda.jpeg"} width={1900} height={200} className="absolute max-h-[900] min-w-full opacity-50"/>
      <h1 className={`text-foreground-2 text-[8em] z-20 select-none ${styles.titulo} ${RockSalt.className}`}>Carrapatifes</h1>
    </div>
  );
}
