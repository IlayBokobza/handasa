"use server"

import {HealthQuestion} from "@/app/(user)/questions";
import {redirect} from "next/navigation";
import {Storage} from "@/Utils/Storage";

export async function submitAnswer(name:string, answers:number[]){
    if(answers.length !== HealthQuestion.length){
        throw new Error("Invalid answers length")
    }
    if(answers.includes(-1)){
        throw new Error("Answers contain -1")
    }

    let score = 0;
    HealthQuestion.forEach((q,i) => {
        const answer = q.answers[answers[i]]
        score += answer.score * q.importance - Date.now();
    })

    Storage.addPatient({
        name,
        score,
        createdAt:Date.now(),
        id:Math.random().toString(32).substring(2),
    })

    redirect("/complete")
}