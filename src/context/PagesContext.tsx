import React, { PropsWithChildren } from "react";

interface PagesContextI {
  page: string;
  changePage: (page: string) => void;
}

const initialContextState = {
  page: "Home",
} as PagesContextI;

const PagesContext = React.createContext<PagesContextI>(initialContextState);

const PagesContextProvider = (props: PropsWithChildren<{}>) => {
  const [page, setPage] = React.useState<string>("Home");
  const changePage = React.useCallback(function changePage(newPage: string) {
    setPage(newPage);
  }, []);

  return <PagesContext.Provider value={{ page: page, changePage }}>
    {props.children}
  </PagesContext.Provider>;
};

const usePagesContext = () => {
  const ctx = React.useContext(PagesContext);

  return {
    ...ctx,
  };
};

export { PagesContextProvider, usePagesContext };
