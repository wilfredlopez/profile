import { useEffect, useRef } from 'react'
import ParticleMachine from './FireworksMachine'


interface FireWorkProps {
    canvasWith?: number
    canvasHeight?: number
    maxParticles?: number
    minParticles?: number
    particleSize?: number,
    canvasMinWidth?: string | number
    canvasMinHeight?: string | number
    canvasBackgroundColor?: string
    speed?: number,
    isRunning: boolean
    getElements?: (canvas: HTMLCanvasElement | null, machine: ParticleMachine) => void
}

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    fireworkProps: FireWorkProps
}


const Fireworks = ({ fireworkProps: { getElements, canvasBackgroundColor, canvasWith = 400, canvasHeight = 400, isRunning = true, speed, maxParticles, minParticles, particleSize = 1, canvasMinHeight, canvasMinWidth }, ...divProps }: Props) => {
    const canvas = useRef<HTMLCanvasElement>(null)
    useEffect(() => {
        let machine: ParticleMachine
        if (isRunning) {

            const c = canvas.current
            if (c) {
                const ctx = c.getContext('2d')
                if (ctx) {
                    machine = new ParticleMachine({ ctx, autoOn: isRunning, POWER: speed, MAX_PARTICLES: maxParticles, RADIUS: particleSize, MIN_PARTICLES: minParticles, backgroundColor: canvasBackgroundColor })
                    machine.animate()
                    if (getElements) {
                        getElements(canvas.current, machine)
                    }
                }
            }
        }
        return () => {
            machine?.stopAnimate()
        }
    }, [canvas, canvasWith, canvasHeight, isRunning, particleSize, maxParticles, minParticles, speed, canvasBackgroundColor])


    return (
        <div {...divProps}>
            <canvas ref={canvas} width={canvasWith} height={canvasHeight} style={{
                height: canvasHeight, // "100%",
                width: canvasWith,// '100%',
                minWidth: canvasMinWidth || '100%',
                minHeight: canvasMinHeight || '100%'
            }} />
        </div>
    )
}

export default Fireworks
