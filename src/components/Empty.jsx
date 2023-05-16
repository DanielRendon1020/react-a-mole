import mole from '../embeded/molehill.png'
import { useEffect } from 'react'

export default function Empty({setMoleIsUp}) {
    useEffect(() => {
        let randMs = Math.ceil(Math.random() * 2000 + 200)
        let timer = setTimeout(() => {
            setMoleIsUp(true)
        }, randMs)
        return () => clearTimeout(timer)
    
    }, [])
    return <div>
        <img src={mole} style={{ width: '30vw' }} />
    </div>
}