import { useEffect } from 'react'
import mole from '../embeded/mole.png'

export default function Mole({setMoleIsUp, onMoleClick}) {
    useEffect(() => {
        let randMs = Math.ceil(Math.random() * 2000 + 500)
        let timer = setTimeout(() => {
            setMoleIsUp(false)
        }, randMs)
        return () => clearTimeout(timer)
    
    }, [])

    return <div>
        <img 
        src={mole} 
        style={{ width: '10vw' }} 
        onClick={onMoleClick}/>
    </div>
}