import { useState, useMemo, useEffect } from 'react'
import Fireworks from './Fireworks'
import styles from './new-year.module.css'
import ParticleMachine from './FireworksMachine'
import { useRouter } from 'next/router'

import { IconButton } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'
interface Props {

}


const addBodyStyle = () => {
    document.body.style.overflow = 'hidden'
}

const removeBodyStyle = () => {
    document.body.style.overflow = 'unset'
}

function isJanuaryTenOrLess() {
    const today = new Date()
    const isJan = today.getUTCMonth() === 0
    if (!isJan) {
        return false
    }

    return today.getUTCDate() <= 10

}


const NewYear = (props: Props) => {
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    const [machine, setMachine] = useState<ParticleMachine>()
    const [Canvas, setCanvas] = useState<HTMLCanvasElement | null>(null)
    const router = useRouter()
    const year = useMemo(() => isJanuaryTenOrLess() ? new Date().getFullYear() : new Date().getFullYear() + 1, [])
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
            setHeight(window.innerHeight)
        }
        window.addEventListener('resize', handleResize)
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
        addBodyStyle()
        return () => {
            removeBodyStyle()
            window.removeEventListener('resize', handleResize)
        }
    }, [])


    useEffect(() => {
        function handleClick(e: MouseEvent) {
            // console.log('machine', { machine })
            if (machine && Canvas) {
                const location = { x: 0, y: 0 }
                location.x = e.clientX
                location.y = e.clientY
                machine.animate(location)
            }
        }
        if (Canvas) {
            Canvas.addEventListener('click', handleClick)
        }
        return () => {
            if (Canvas) {
                Canvas.removeEventListener('click', handleClick)
            }
        }
    }, [Canvas, machine])



    return (

        <div className={styles.newyear}>
            <div className={styles.backButtonContainer}>
                <IconButton
                    onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        router.push('/')
                    }}
                    style={{ color: 'white' }}>
                    <ArrowBack color="inherit" />
                </IconButton>
            </div>
            <div className={styles['text-content']}>

                <h1>HAPPY NEW YEAR</h1>
                <h2>{year}</h2>
                <p className={styles.tapkey}>TAP TO FIRE</p>

                <p className={styles.madeBy}>By Wilfred Lopez</p>
            </div>
            <Fireworks
                fireworkProps={{
                    getElements: (canvas, pm) => {
                        setCanvas(canvas)
                        setMachine(pm)
                    },
                    isRunning: true,
                    canvasHeight: height,
                    canvasWith: width,
                }} />
        </div>
    )
}

export default NewYear
