import React from "react"
import { useStoreState, useStoreActions } from "easy-peasy"

import { Button, Icon, Label } from "semantic-ui-react"
import { StoreState } from "../../model/state.model"
import { AppActions } from "../../model/actions.model"

const Counter = () => {
  const counter = useStoreState<StoreState>((state) => state.counter)
  const increase = useStoreActions<AppActions>((actions) => actions.add)
  const decrease = useStoreActions<AppActions>((actions) => actions.decrease)

  return (
    <div className="text-center">
      <Label circular color="red" size="huge">
        Count <Label.Detail>{counter}</Label.Detail>
      </Label>
      <p>-</p>
      <Button.Group>
        <Button color="yellow" size="huge" onClick={decrease}>
          <Icon name="arrow left" />
          Decrease
        </Button>
        <Button.Or />
        <Button color="red" size="huge" onClick={increase}>
          Increase
          <Icon name="arrow right" />
        </Button>
      </Button.Group>
    </div>
  )
}

export default Counter
