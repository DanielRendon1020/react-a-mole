import Empty from "./Empty"
import Mole from "./Mole"
import { useState } from "react"

export default function MoleContainer() {
    const [moleIsUp, setMoleIsUp] = useState(false)

    return <div className="mole-container">
        {moleIsUp ? <Mole setMoleIsUp={setMoleIsUp} /> : <Empty setMoleIsUp={setMoleIsUp} />}
    </div>
} 