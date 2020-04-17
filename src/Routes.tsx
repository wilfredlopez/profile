import React from "react"
import { Route, Switch } from "react-router-dom"
import HomepageLayout from "./components/pages/HomepageLayout"
import Contact from "./components/pages/Contact"
import Projects from "./components/pages/Projects"

export default function Routes() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" component={HomepageLayout} exact />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </React.Fragment>
  )
}
