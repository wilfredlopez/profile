import React from "react"
import Routes from "./Routes"
import ResponsiveContainer from "./components/pages/containers/ResponsiveContainer"
import SiteFooter from "./components/pages/partials/SiteFooter"

function App() {
  return (
    <ResponsiveContainer>
      <main>
        <Routes />
      </main>
      <footer>
        <SiteFooter />
      </footer>
    </ResponsiveContainer>
  )
}

export default App
