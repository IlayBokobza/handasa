"use server"

import {Storage} from "@/Utils/Storage";

export async function deletePatientAction(id:string){
    Storage.removePatient(id)
}