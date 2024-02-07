"use client"

import {useListenForPatients} from "@/hooks/useListenForPatients";
import {useTransition} from "react";
import {deletePatientAction} from "@/app/admin/actions";

export default function TableData() {
    const [patients,localRemove] = useListenForPatients()
    const [isPending,startTransition] = useTransition()

    function deletePatient(id:string) {
        localRemove(id)
        startTransition(() => deletePatientAction(id))
    }

    return patients.map((p, i) =>
            <tr key={p.id}>
                <td>{i+1}</td>
                <td>
                    <button disabled={isPending} onClick={() => deletePatient(p.id)} className="btn">מחק</button>
                </td>
                <td>{p.name}</td>
                <td>{p.id}</td>
            </tr>
    )
}