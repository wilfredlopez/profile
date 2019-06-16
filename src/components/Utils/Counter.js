import React from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'

import {
    Button,
    Icon,
    Label
} from 'semantic-ui-react'



const Counter = () => {
    const counter = useStoreState(state => state.counter)
    const increase = useStoreActions(actions => actions.add)
    const decrease = useStoreActions(actions => actions.decrease)

    return (
        <div className="text-center">
            <Label circular color="red" size="huge">
                Count   <Label.Detail>{counter}</Label.Detail>
            </Label>
            <p>-</p>
            <Button.Group>
                <Button color='yellow' size='huge' onClick={decrease}>
                    <Icon name='left arrow' />
                    Decrease
            </Button>
                <Button.Or />
                <Button color='red' size='huge' onClick={increase}>
                    Increase
        <Icon name='right arrow' />
                </Button>
            </Button.Group>
        </div>
    )
}

export default Counter
