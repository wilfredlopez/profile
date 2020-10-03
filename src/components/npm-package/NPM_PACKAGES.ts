export interface NnmPackage {
  name: string
  url: string
  description: string
  command?: string
}
export const NPM_PACKAGES: NnmPackage[] = [
  {
    name: 'React-utils',
    url: 'https://www.npmjs.com/package/@wilfredlopez/react-utils',
    description: 'Javascript Utilify Functions, Classes and Typescript types.',
    command: 'npm i @wilfredlopez/react-utils',
  },
  {
    name: 'wl-components/react',
    url: 'https://www.npmjs.com/package/@wilfredlopez/react',
    description:
      'React specific building blocks on top of @wilfredlopez/wl-componets UI Library.',
    command: 'npm install @wilfredlopez/react',
  },
  {
    name: 'wl-components',
    url: 'https://www.npmjs.com/package/@wilfredlopez/wl-components',
    description: 'Web Components UI Library',
    command: 'npm i @wilfredlopez/wl-components',
  },
  {
    name: 'react-use-light',
    url: 'https://www.npmjs.com/package/react-use-light',
    description:
      'Collection of essential React Hooks. Partial react-use library (by streamich) without external dependencies and other hooks.',
    command: 'npm i react-use-light',
  },

  {
    name: 'use-vue-hooks',
    url: 'https://www.npmjs.com/package/use-vue-hooks',
    description: 'Custom Hooks for Vue 3 applications',
    command: 'npm i use-vue-hooks',
  },
  {
    name: 'wl-range',
    url: 'https://www.npmjs.com/package/wl-range',
    description:
      'Range Web Component. also wl-range-vue and wl-range-react packages for compatibility with frameworks',
    command: 'npm i wl-range',
  },
  {
    name: 'youtube-api-search-typed',
    url: 'https://www.npmjs.com/package/youtube-api-search-typed',
    description: 'Makes Easy the search for videos on Youtube using their API.',
    command: 'npm i youtube-api-search-typed',
  },
]
