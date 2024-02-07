"use client"

import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

export default function CountingButton() {
    const router = useRouter()
    const [remaining,setRemaining] = useState(10)

    function action(){
        router.push("/")
    }

    useEffect(() => {
        let remainingCopy = remaining;
        setInterval(() => {
            setRemaining(remainingCopy - 1)
            remainingCopy -= 1;
            if(remainingCopy < 1){
                action()
            }
        },1000)
    },[])

    return <button className="btn btn-primary" onClick={action}>שאלון חדש - {remaining}</button>
}