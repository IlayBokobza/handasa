"use client"
import {useRef, useState, useTransition} from "react";
import {HealthQuestion} from "@/app/(user)/questions";
import {submitAnswer} from "@/app/(user)/actions";
import "./page.scss"

export default function Home() {
    const [isPending, startTransition] = useTransition()
    const [current, setCurrent] = useState(-1)
    const [selectedAnswer, setSelectedAnswer] = useState(-1)
    const [name, setName] = useState("")
    const answers = useRef<number[]>([])

    function next() {
        if (current === -1) {
            setCurrent(current + 1);
            return;
        }

        answers.current!.push(selectedAnswer)
        // setSelectedAnswer(-1)
        setCurrent(current + 1)

        if (current + 1 >= HealthQuestion.length) {
            startTransition(() => submitAnswer(name,answers.current!))
        }
    }

    return (
        <>
            <header>
                <h1 className="heading">שלום וברוך הבא לחדר המיון</h1>
                <h3>אנחנו מצטערים על מצבך, אבל לפני שנוכל לקבל אותך אנחנו צריכים שתמלא את השאלון הבא</h3>
            </header>
            <main>
                {current === -1 && current < HealthQuestion.length && <>
                    <h4 className="heading2">דבר ראשון אנחנו צריכים את השם שלכם</h4>
                    <input className="input" onChange={(e) => setName(e.target.value)} type="name"/>
                </>}
                {current !== -1 && current < HealthQuestion.length && <>
                    <h4 className="heading2">{HealthQuestion[current].question}</h4>
                    <h5 className="heading3">תסמן את התשובה שהכי נכונה לך</h5>
                    <div className="question">
                        {HealthQuestion[current].answers.map((ans, i) => (
                            <div className="group" key={i}>
                                <input
                                    type="radio"
                                    name={HealthQuestion[current].question}
                                    id={ans.option + i}
                                    value={i}
                                    onChange={() => setSelectedAnswer(i)}
                                />
                                <label className="form-check-label" htmlFor={ans.option + i}>
                                    {ans.option}
                                </label>
                            </div>
                        ))}
                    </div>
                </>}
                {current < HealthQuestion.length &&
                    <button className="btn" onClick={next}>הבא</button>
                }
                {current >= HealthQuestion.length &&
                    <span>טוען</span>
                }
            </main>
        </>
    );
}