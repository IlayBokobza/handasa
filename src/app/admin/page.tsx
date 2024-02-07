import TableData from "@/app/admin/TableData";
import {Storage} from "@/Utils/Storage";
import "./page.scss"

export default function Admin() {

    return <main className="text-center">
        <header>
            <h1>מטופלים בתור</h1>
        </header>
        <table className="table">
            <thead>
            <tr>
                <th>#</th>
                <th>פעולות</th>
                <th>שם</th>
                <th>מספר</th>
            </tr>
            </thead>
            <tbody>
                <TableData/>
            </tbody>
        </table>
    </main>
}