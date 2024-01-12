import { useState } from 'react'
import Separator from './countdownSeparator'

export default function Countdown() {
    const [seconds, setSeconds] = useState([0, 0])
    const [minutes, setMinutes] = useState([0, 0])

    return (
        <div className="flex items-center gap-4 mt-14">
            <Separator>{minutes[0]}</Separator>
            <Separator>{minutes[1]}</Separator>
            <span className="text-[10rem] text-center text-content-green font-bold">
                :
            </span>
            <Separator>{seconds[0]}</Separator>
            <Separator>{seconds[1]}</Separator>
        </div>
    )
}
