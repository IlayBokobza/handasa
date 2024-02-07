"use client"

import {useListenForPatients} from "@/hooks/useListenForPatients";
import "./page.scss"

export default function DisplayPage() {
    const [patients] = useListenForPatients()
    const first = patients[0]
    const allButFirst = [...patients]
    allButFirst.shift()

    return <main>
        <div className="next-card">
            {!!patients.length && <>
                <h2 className="heading">הבא בתור</h2>
                <h3 className="text">{first.name}</h3>
                <h2 className="heading">מספר</h2>
                <h3 className="text">{first.id}</h3>
            </>}
            {!patients.length &&
                <h2 className="heading">התור ריק</h2>
            }
        </div>
        <div className="next-list">
            <h2 className="heading">הבאים בתור</h2>
            <table>
                <tbody>
                    {!!allButFirst.length && allButFirst.map((p,i) =>
                        <tr key={p.id}>
                            <td>{i + 2}</td>
                            <td>{p.name}</td>
                            <td>{p.id}</td>
                        </tr>
                    )}
                    {/*{!allButFirst.length && <h2 className="heading">התור ריק</h2>}*/}
                </tbody>
            </table>
        </div>
    </main>
}