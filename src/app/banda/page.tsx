"use client"

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import getPlanningsList from "./action";

function Planos({planos}: {planos: {id: number, name: string, type: string, musics: string}[]}) {

    if (!planos) {
        return (<h1>Nada planejado</h1>)
    }

    return (
        <div>{planos.map((el, ind) => (
            <div key={ind}>Nome: {el.name} - Tipo: {el.type}
            <ul>
                {JSON.parse(el.musics).map((mus: [], inde: number) => (<li key={inde}>{mus}</li>))}
            </ul>
            </div>
        ))}</div>
    )
}

export default function BandaPage() {
    const { data: session } = useSession()
    const [plannings, setPlannings] = useState<{id: number, name: string, type: string, musics: string}[]>([])
    const [tab, setTab] = useState<string>("planos")

    useEffect(() => {
        getPlanningsList().then(setPlannings)
    }, [])


    function handleClick(e: HTMLDivElement) {
        const name = e.id
        setTab(name)
    }
    useEffect(() => {
        if (!session) {
        window.location.href = "/"
        }
    }, [session])
    

    return (
        <div>
            {tab === "planos" && <Planos planos={plannings}/>}
        </div>
    )
}