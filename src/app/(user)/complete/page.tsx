import CountingButton from "@/app/(user)/complete/CountingButton";
import "./page.scss";

export default function Complete(){
    return <main className="text-center">
        <h1>תודה על שיתוף הפעולה</h1>
        <h2 className="mb-4">ההשם לך אמור להיות עכשיו על מסמך</h2>
        <CountingButton/>
    </main>
}