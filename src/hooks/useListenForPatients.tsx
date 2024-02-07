import {useEffect, useState} from "react";
import {Patient} from "@/Utils/Storage";

export function useListenForPatients():[Patient[],(id:string) => void]{
    const [patients,setPatients] = useState<Patient[]>([])

    async function startListening(){
        const eventSource = new EventSource("http://localhost:3001/patients")

        eventSource.addEventListener("open", () => {
            console.log("Connected to the server")
        })

        eventSource.addEventListener("ping", ()=> {console.log("ping")})

        eventSource.addEventListener("update",e => {
            setAndSortPatients(JSON.parse(e.data))
        })
    }

    async function manualFetch(){
        const res = await fetch("/api/patients",{
            next:{
                revalidate:0,
            }
        })

        const data = await res.json()
        setAndSortPatients(data)
    }

    function localRemove(id:string){
        setPatients(patients.filter(p => p.id !== id))
    }

    function setAndSortPatients(patients:Patient[]){
        const newArr = patients.sort((a,b) => a.score - b.score).reverse()
        setPatients(newArr)
    }

    useEffect(() => {
        manualFetch()
        startListening()
    },[])

    return [patients,localRemove]
}