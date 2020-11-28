import React, { useState } from 'react'
import Fireworks from './Fireworks'
import styles from './new-year.module.css'
import ParticleMachine from './FireworksMachine'

interface Props {

}


const addBodyStyle = () => {
    document.body.style.overflow = 'hidden'
}

const removeBodyStyle = () => {
    document.body.style.overflow = 'unset'
}

const NewYear = (props: Props) => {
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    const [machine, setMachine] = useState<ParticleMachine>()
    const [Canvas, setCanvas] = useState<HTMLCanvasElement | null>(null)

    React.useEffect(() => {
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


    React.useEffect(() => {
        function handleClick(e: MouseEvent) {
            console.log('machine', { machine })
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
            <div className={styles['text-content']}>

                <h1>HAPPY NEW YEAR</h1>
                <h2>2021</h2>
                <p className={styles.tapkey}>TAP TO FIRE</p>
                <p>By Wilfred Lopez</p>
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
