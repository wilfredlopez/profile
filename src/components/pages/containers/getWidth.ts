import { Responsive } from "semantic-ui-react"
// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === "undefined"

  return isSSR && Responsive.onlyTablet.minWidth
    ? +Responsive.onlyTablet.minWidth
    : window.innerWidth
}

export default getWidth
