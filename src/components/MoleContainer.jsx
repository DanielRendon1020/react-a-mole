import Empty from "./Empty"
import Mole from "./Mole"
import { useState } from "react"

export default function MoleContainer({setScore, score}) {
    const [moleIsUp, setMoleIsUp] = useState(false)
    const onMoleClick =  () => {
        if (moleIsUp) {
            setMoleIsUp(false)
            setScore(score + 1)
        
        }}

    return <div className="mole-container">
        {moleIsUp ?
        <Mole 
        setMoleIsUp={setMoleIsUp} 
        onMoleClick={onMoleClick}
        /> :
        <Empty 
        setMoleIsUp={setMoleIsUp} />}
    </div>
} 