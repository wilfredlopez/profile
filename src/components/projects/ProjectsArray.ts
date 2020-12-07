import { ImageToSlider } from '@components/shared/SliderCard'

import {
  coronaVirusDescription,
  expenseManagerDescription,
  retailmeNowDescription,
  vapeMusicDescription,
  twoDealDescription,
} from './descriptions'
import { PROJECT_IMAGES } from './images'

export interface Project {
  classKey: 'shop' | 'vape' | 'expense'
  images: ImageToSlider[]
  url: string
  name: string
  title: string
  description: JSX.Element
}

const corona: Project = {
  classKey: 'shop',
  images: PROJECT_IMAGES.coronaVirus,
  url: 'https://status-coronavirus.netlify.app/global',
  name: 'COVID-19 Status',
  title: 'COVID-19 - Coronavirus Status',
  description: coronaVirusDescription,
}

const vapeMusic: Project = {
  classKey: 'vape',
  images: PROJECT_IMAGES.vapeMusic,
  url: 'https://music.wilfredlopez.net/',
  name: 'Vape Music',
  title: 'Vape Music - Latin Music Listen & Download',
  description: vapeMusicDescription,
}

const retailmeNow: Project = {
  classKey: 'shop',
  images: PROJECT_IMAGES.retailMeNow,
  url: '#',
  name: 'RetalMeNow',
  title: 'RetalMeNow - Shop Online',
  description: retailmeNowDescription,
}

const expenseManager: Project = {
  classKey: 'expense',
  images: PROJECT_IMAGES.ExpenseManger,
  url: 'https://wilfredexpensemanager.netlify.app',
  name: 'Expenses Manager',
  title: 'Expenses Manager - Manage your personal finances',
  description: expenseManagerDescription,
}

const twoDeal: Project = {
  classKey: 'shop',
  images: PROJECT_IMAGES.TwoDeal,
  url: 'https://twodeal.herokuapp.com/',
  name: 'Two Deal',
  title: 'Online Store',
  description: twoDealDescription,
}

export const ProjectsArray: Project[] = [
  twoDeal,
  vapeMusic,
  expenseManager,
  corona,
  retailmeNow,
]

export default ProjectsArray
