"use client"

import { useSession } from "next-auth/react";
import { useState, useEffect, useMemo } from "react";
import getPlanningsList from "./action";
import { redirect } from "next/navigation";
import { Faculty_Glyphic } from "next/font/google";
import clsx from "clsx";

const FacultyGlyphic = Faculty_Glyphic({
    weight: "400",
    subsets: ["latin"]
})

function Planos({planos}: {planos: {id: number, name: string, type: string, musics: string, date: string}[]}) {

    if (!planos) {
        return (<h1>Nada planejado</h1>)
    }

    return (
        <div className="p-6 flex flex-row wrap">{planos.map((el, ind) => (
            <div className={`${FacultyGlyphic.className} bg-background-3 min-w-[28em] flex flex-col h-[30em] border-1 p-4 gap-8 justify-center items-center rounded-xl`} key={ind}>
                <h1 className="text-2xl font-bold">Nome: {el.name}</h1>
                <h2 className="text-xl font-bold">Tipo: {el.type[0].toUpperCase() + el.type.slice(1)}</h2>
                <h2 className="text-xl font-bold">Data: {el.date}</h2>
                <h2 className="text-xl">Musicas:</h2>
                <ul className="bg-background-2 rounded-xl overflow-scroll text-xl p-3 w-8/10">
                    {JSON.parse(el.musics).map((mus: [], inde: number) => (<li key={inde}>{mus}</li>))}
                </ul>
            </div>
        ))}</div>
    )
}

export default function BandaPage() {
    const { data: session, status } = useSession()
    const [plannings, setPlannings] = useState<{id: number, name: string, type: string, musics: string, date: string}[]>([])
    const [tab, setTab] = useState<string>("planos")
    const tabs = ["planos", "midia"]
    useEffect(() => {
        getPlanningsList().then(setPlannings)
    }, [])


    function handleClick(e: React.MouseEvent<HTMLDivElement>) {
        const name = e.currentTarget.id
        setTab(name)
    }

    useEffect(() => {
        if (status === "unauthenticated") {
            redirect("/")
        }
    }, [status])
    

    return (
        <div>
            <div className={`${FacultyGlyphic.className} flex flex-row gap-4 text-2xl border-b-1 border-foreground-1 pl-4 pt-1 pb-1`}>
                {tabs.map(( el, ind) => (
                    <div onClick={handleClick} 
                    className={clsx(`select-none cursor-pointer duration-80`, tab === el ? 'border-b-2 border-foreground-1' : "hover:border-b-2 border-gray-500")} 
                    key={ind} 
                    id={el}>
                        {el[0].toUpperCase() + el.slice(1)}
                    </div>))}
            </div>
            {tab === "planos" && <Planos planos={plannings}/>}
        </div>
    )
}