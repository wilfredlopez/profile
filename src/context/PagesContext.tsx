import { PropsWithChildren, createContext, useState, useCallback, useContext } from "react"

interface PagesContextI {
  page: string
  changePage: (page: string) => void
}

const initialContextState = {
  page: "Home",
} as PagesContextI

const PagesContext = createContext<PagesContextI>(initialContextState)

const PagesContextProvider = (props: PropsWithChildren<{}>) => {
  const [page, setPage] = useState<string>("Home")
  const changePage = useCallback(function changePage(newPage: string) {
    setPage(newPage)
  }, [])

  return <PagesContext.Provider value={{ page: page, changePage }}>
    {props.children}
  </PagesContext.Provider>
}

const usePagesContext = () => {
  const ctx = useContext(PagesContext)

  return {
    ...ctx,
  }
}

export { PagesContextProvider, usePagesContext }
